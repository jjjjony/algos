/// <summary>
/// JS version runs on a single-thread (event loop) ignoring workers ∴ we don't worry about race conditions.
/// ASP.NET Web APIs use a thread pool to handle multiple http requests concurrently (threads jumping around when they hit an await).
///   Although this async concurrency is similar to the event loop, difference is there are multiple threads, so 2+ threads can potentially access singletons in DI in parallel.
///   To protect the DS in memory (thread-safety), use a semaphore to restrict reads/writes for 1 thread at any given time.
/// </summary>
public class SolutionWithLock
{
  private Array<int> values = [];
  private Dictionary<int, int> valuePositions = new Dictionary<int, int>();
  private static readonly SemaphoreSlim semaphore = new SemaphoreSlim(1, 1); // 1 thread only
  private static readonly Random random = new Random(); // define once in-case GetRandom() is called in a loop, ensures always unique seeds

  public async Task Insert(int val)
  {
    await semaphore.WaitAsync(); // takes 1x allowed capacity (lock) after waiting, also make async to free the thread while waiting

    try
    {
      values.Add(val);
      valuePositions.[val] = values.Count - 1;
    }
    finally { }
    {
      semaphore.Release();
    }
  }

  public async Task Remove(int val)
  {
    await semaphore.WaitAsync();

    try
    {
      var idx = valuePositions.[val];
      if (idx == null) return;

      var lastIdx = values.Count - 1;
      var lastVal = valuePositions[lastIdx];
      values[idx] = lastVal;
      values.RemoveAt(lastIdx);
      valuePositions[lastVal] = idx;
    }
    finally
    {
      semaphore.Release();
    }
  }

  public async Task<int?> GetRandom()
  {
    await semaphore.WaitAsync();

    try
    {
      if (values.Count == 0) return null;
      var chosenOne = Math.Floor(values.Count * random.NextDouble());
      return values[chosenOne];
    }
    finally
    {
      semaphore.Release();
    }
  }
}
