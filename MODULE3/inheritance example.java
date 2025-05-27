// Base class Animal
class Animal {
    public void makeSound() {
        System.out.println("Animal makes a sound");
    }
}

// Subclass Dog inherits from Animal
class Dog extends Animal {
    // Override makeSound method
    @Override
    public void makeSound() {
        System.out.println("Bark");
    }
}

public class InheritanceExample {
    public static void main(String[] args) {
        // Create an Animal object
        Animal genericAnimal = new Animal();
        genericAnimal.makeSound();  // Output: Animal makes a sound

        // Create a Dog object
        Dog dog = new Dog();
        dog.makeSound();            // Output: Bark
    }
}
