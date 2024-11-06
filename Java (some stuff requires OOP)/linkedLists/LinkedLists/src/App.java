public class App {
    public static void main(String[] args) throws Exception {

        Node nodeA = new Node(0);
        Node nodeB = new Node(1);
        Node nodeC = new Node(2);
        Node nodeD = new Node(3);
        Node nodeE = new Node(4);
        Node nodeF = new Node(5);

        nodeA.next = nodeB;
        nodeB.next = nodeC;
        nodeC.next = nodeD;
        nodeD.next = nodeE;
        nodeE.next = nodeF;

        System.out.println("Linked List size before addition:\n" + countNodes(nodeA) + "\n");

        Node nodeG = new Node(6);

        System.out.println("Adding one extra node:");
        Node current = nodeA;
        for (int i = 0; i < countNodes(nodeA); i++) {
            System.out.print(current.data + (current.next != null ? ", " : " "));
            current = current.next;
        }

        System.out.println("\n\nLinked List size after addtion:");
        addNode(nodeA, nodeG);

        System.out.println(countNodes(nodeA));

        current = nodeA;
        for (int i = 0; i < countNodes(nodeA); i++) {
            System.out.print(current.data + (current.next != null ? ", " : " "));
            current = current.next;
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
    }

}
