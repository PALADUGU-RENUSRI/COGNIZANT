import java.util.List;
import java.util.stream.Collectors;

public class RecordDemo {
    // Define a record Person with name and age
    public record Person(String name, int age) {}

    public static void main(String[] args) {
        // Create instances of Person
        Person p1 = new Person("Alice", 30);
        Person p2 = new Person("Bob", 17);
        Person p3 = new Person("Charlie", 25);

        // Print instances
        System.out.println(p1);
        System.out.println(p2);
        System.out.println(p3);

        // Put records in a list
        List<Person> people = List.of(p1, p2, p3);

        // Filter people with age >= 18 using Streams
        List<Person> adults = people.stream()
                                   .filter(person -> person.age() >= 18)
                                   .collect(Collectors.toList());

        System.out.println("\nAdults (age >= 18):");
        adults.forEach(System.out::println);
    }
}
