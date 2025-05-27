public class SampleProgram {
    private String message;

    public SampleProgram(String message) {
        this.message = message;
    }

    public void printMessage() {
        System.out.println("Message: " + message);
    }

    public static void main(String[] args) {
        SampleProgram sp = new SampleProgram("Hello, Decompiler!");
        sp.printMessage();
    }
}
