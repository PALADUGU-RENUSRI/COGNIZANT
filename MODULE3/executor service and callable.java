import java.util.concurrent.*;
import java.util.*;

public class CallableExample {
    public static void main(String[] args) {
        // Create a fixed thread pool with 4 threads
        ExecutorService executor = Executors.newFixedThreadPool(4);

        // List to hold Future objects
        List<Future<String>> futures = new ArrayList<>();

        // Submit 5 Callable tasks
        for (int i = 1; i <= 5; i++) {
            int taskId = i;
            Callable<String> task = () -> {
                Thread.sleep(1000); // Simulate some computation
                return "Result from Task " + taskId;
            };

            Future<String> future = executor.submit(task);
            futures.add(future);
        }

        // Retrieve and print results
        for (Future<String> future : futures) {
            try {
                String result = future.get(); // Blocking call
                System.out.println(result);
            } catch (InterruptedException | ExecutionException e) {
                System.err.println("Error in task: " + e.getMessage());
            }
        }

        // Shutdown the executor
        executor.shutdown();
    }
}
