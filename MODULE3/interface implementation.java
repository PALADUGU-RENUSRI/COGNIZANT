// Define the interface Playable
interface Playable {
    void play();
}

// Guitar class implements Playable
class Guitar implements Playable {
    @Override
    public void play() {
        System.out.println("Playing the guitar.");
    }
}

// Piano class implements Playable
class Piano implements Playable {
    @Override
    public void play() {
        System.out.println("Playing the piano.");
    }
}

public class InterfaceDemo {
    public static void main(String[] args) {
        // Instantiate Guitar and Piano
        Playable guitar = new Guitar();
        Playable piano = new Piano();

        // Call play() method on both
        guitar.play();  // Output: Playing the guitar.
        piano.play();   // Output: Playing the piano.
    }
}
