import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;

public class AdjacencyMatrixCreator {
    public static int[][] createAdjacencyMatrix(int n) {
        int[][] matrix = new int[n][n]; // Initialize an n x n matrix with all elements set to 0
        
        Random random = new Random();
        
        List<Integer> rows = new ArrayList<>();
        List<Integer> columns = new ArrayList<>();
        
        // Generate a list of indices for rows and columns
        for (int i = 0; i < n; i++) {
            rows.add(i);
            columns.add(i);
        }
        
        Collections.shuffle(rows);
        Collections.shuffle(columns);

        for (int i = 0; i < n; i++) {
            int row = rows.get(i);
            int col = columns.get(i);
            
            matrix[row][row] = 1;
            matrix[row][col] = 1;
        }
        
        return matrix;
    }
    
    public static void printMatrix(int[][] matrix) {
        int n = matrix.length;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }
    }
    
    public static void main(String[] args) {
        int n = 5;
        int[][] adjacencyMatrix = createAdjacencyMatrix(n);
        
        // Print the adjacency matrix
        printMatrix(adjacencyMatrix);
    }
}
