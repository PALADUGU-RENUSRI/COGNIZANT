// Define a class implementing Runnable
class MessagePrinter implements Runnable {
    private String message;
    private int times;

    public MessagePrinter(String message, int times) {
        this.message = message;
        this.times = times;
    }

    @Override
    public void run() {
        for (int i = 1; i <= times; i++) {
            System.out.println(Thread.currentThread().getName() + ": " + message + " (" + i + ")");
            try {
                Thread.sleep(500); // Sleep for 0.5 seconds for clearer output
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

public class ThreadCreationDemo {
    public static void main(String[] args) {
        // Create Runnable objects
        Runnable task1 = new MessagePrinter("Hello from Thread 1", 5);
        Runnable task2 = new MessagePrinter("Hello from Thread 2", 5);

        // Create Threads with Runnable tasks
        Thread thread1 = new Thread(task1, "Thread-1");
        Thread thread2 = new Thread(task2, "Thread-2");

        // Start the threads
        thread1.start();
        thread2.start();
    }
}
