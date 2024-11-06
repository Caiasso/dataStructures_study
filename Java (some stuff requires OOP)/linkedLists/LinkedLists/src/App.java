public class App {
    public static void main(String[] args) throws Exception {

        Node nodeA = new Node(0);
        Node nodeB = new Node(1);
        Node nodeC = new Node(2);
        Node nodeD = new Node(3);
        Node nodeE = new Node(4);
        Node nodeF = new Node(5);

        addNode(nodeA, nodeB);
        addNode(nodeA, nodeC);
        addNode(nodeA, nodeD);
        addNode(nodeA, nodeE);
        addNode(nodeA, nodeF);

        System.out.println("Linked List size before addition:\n" + countNodes(nodeA) + " indexes" + "\n");

        Node nodeG = new Node(6);

        System.out.println("Adding one extra node:");
        Node current = nodeA;
        for (int i = 0; i < countNodes(nodeA); i++) {
            System.out.print(current.data + (current.next != null ? ", " : (" -----> " + nodeG.data + "\n")));
            current = current.next;
        }

        addNode(nodeA, nodeG);

        current = nodeA;
        for (int i = 0; i < countNodes(nodeA); i++) {
            System.out.print(current.data + (current.next != null ? ", " : (" <----- " + "\n")));
            current = current.next;
        }

        System.out.println("\nLinked List size after addition:\n" + countNodes(nodeA) + " indexes" + "\n");
        System.out.println("\nAnd here are all the previous node for each node in reverse:");
        current = getLastNode(nodeA);
        for (int i = countNodes(nodeA); i > 0; i--) {
            System.out.print((current.prev != null ? current.prev.data : "initial node")
                    + (current.prev != null ? ", " : " "));
            current = current.prev;
        }

    }

    public static int countNodes(Node head) {
        int nodesCount = 0;
        Node current = head;

        while (current != null) {
            nodesCount++;
            current = current.next;
        }

        return nodesCount;
    }

    public static void addNode(Node head, Node newNode) {
        Node current = head;
        int n = countNodes(head);

        for (int i = 0; i < n - 1; i++) {
            current = current.next;
        }

        current.next = newNode;
        newNode.prev = current;
    }

    public static Node getLastNode(Node head) {
        Node current = head;

        for (int i = 0; i < countNodes(head) - 1; i++) {
            current = current.next;
        }

        return current;
    }

}
