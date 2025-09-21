import { Problem } from '../types';

export const pythonAlgorithms: Problem[] = [
  // Basic Python Algorithms
  {
    id: 'py-1',
    title: 'Two Sum',
    description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. Implement this in Python.',
    difficulty: 'easy',
    category: 'Arrays',
    tags: ['python', 'array', 'hash-table', 'two-pointer'],
    timeLimit: 2,
    memoryLimit: 50,
    points: 100,
    testCases: [
      { input: '[2,7,11,15]\n9', expectedOutput: '[0,1]', isHidden: false },
      { input: '[3,2,4]\n6', expectedOutput: '[1,2]', isHidden: false },
      { input: '[3,3]\n6', expectedOutput: '[0,1]', isHidden: true }
    ],
    starterCode: `def two_sum(nums, target):
    """
    Find two numbers in nums that add up to target.
    
    Args:
        nums: List of integers
        target: Target sum
        
    Returns:
        List of two indices
    """
    # Your code here
    pass`,
    solution: `def two_sum(nums, target):
    """
    Find two numbers in nums that add up to target.
    
    Args:
        nums: List of integers
        target: Target sum
        
    Returns:
        List of two indices
    """
    num_map = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_map:
            return [num_map[complement], i]
        num_map[num] = i
    return []`,
    hints: [
      'Use a dictionary to store numbers and their indices',
      'For each number, check if its complement exists in the dictionary',
      'Time complexity: O(n), Space complexity: O(n)'
    ],
    explanation: 'We use a hash map (dictionary in Python) to store each number and its index as we iterate through the array. For each number, we calculate its complement (target - current number) and check if it exists in our map.',
    relatedProblems: ['py-2', 'py-3', 'py-4']
  },
  
  {
    id: 'py-2',
    title: 'Binary Search',
    description: 'Implement binary search algorithm in Python to find the target value in a sorted array.',
    difficulty: 'easy',
    category: 'Search',
    tags: ['python', 'binary-search', 'array', 'divide-conquer'],
    timeLimit: 2,
    memoryLimit: 50,
    points: 100,
    testCases: [
      { input: '[-1,0,3,5,9,12]\n9', expectedOutput: '4', isHidden: false },
      { input: '[-1,0,3,5,9,12]\n2', expectedOutput: '-1', isHidden: false },
      { input: '[5]\n5', expectedOutput: '0', isHidden: true }
    ],
    starterCode: `def binary_search(nums, target):
    """
    Binary search implementation in Python.
    
    Args:
        nums: Sorted list of integers
        target: Value to search for
        
    Returns:
        Index of target, or -1 if not found
    """
    # Your code here
    pass`,
    solution: `def binary_search(nums, target):
    """
    Binary search implementation in Python.
    
    Args:
        nums: Sorted list of integers
        target: Value to search for
        
    Returns:
        Index of target, or -1 if not found
    """
    left, right = 0, len(nums) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1`,
    hints: [
      'Use two pointers: left and right',
      'Calculate middle index and compare with target',
      'Adjust search range based on comparison',
      'Time complexity: O(log n)'
    ],
    explanation: 'Binary search works by repeatedly dividing the search interval in half. We compare the target with the middle element and eliminate half of the array based on the comparison.',
    relatedProblems: ['py-1', 'py-3', 'py-5']
  },

  {
    id: 'py-3',
    title: 'Merge Sort',
    description: 'Implement the merge sort algorithm in Python to sort an array of integers.',
    difficulty: 'medium',
    category: 'Sorting',
    tags: ['python', 'merge-sort', 'divide-conquer', 'recursion'],
    timeLimit: 3,
    memoryLimit: 50,
    points: 200,
    testCases: [
      { input: '[5,2,8,1,9]', expectedOutput: '[1,2,5,8,9]', isHidden: false },
      { input: '[3,1,4,1,5]', expectedOutput: '[1,1,3,4,5]', isHidden: false },
      { input: '[1]', expectedOutput: '[1]', isHidden: true }
    ],
    starterCode: `def merge_sort(arr):
    """
    Merge sort implementation in Python.
    
    Args:
        arr: List of integers to sort
        
    Returns:
        Sorted list
    """
    # Your code here
    pass

def merge(left, right):
    """
    Merge two sorted arrays.
    
    Args:
        left: Left sorted array
        right: Right sorted array
        
    Returns:
        Merged sorted array
    """
    # Your code here
    pass`,
    solution: `def merge_sort(arr):
    """
    Merge sort implementation in Python.
    
    Args:
        arr: List of integers to sort
        
    Returns:
        Sorted list
    """
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    return merge(left, right)

def merge(left, right):
    """
    Merge two sorted arrays.
    
    Args:
        left: Left sorted array
        right: Right sorted array
        
    Returns:
        Merged sorted array
    """
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    result.extend(left[i:])
    result.extend(right[j:])
    
    return result`,
    hints: [
      'Use divide and conquer approach',
      'Split array into two halves recursively',
      'Merge the sorted halves back together',
      'Time complexity: O(n log n), Space complexity: O(n)'
    ],
    explanation: 'Merge sort is a divide-and-conquer algorithm. It divides the array into two halves, recursively sorts them, and then merges the sorted halves.',
    relatedProblems: ['py-2', 'py-4', 'py-6']
  },

  {
    id: 'py-4',
    title: 'Quick Sort',
    description: 'Implement the quick sort algorithm in Python with proper partitioning.',
    difficulty: 'medium',
    category: 'Sorting',
    tags: ['python', 'quick-sort', 'divide-conquer', 'recursion'],
    timeLimit: 3,
    memoryLimit: 50,
    points: 200,
    testCases: [
      { input: '[3,6,8,10,1,2,1]', expectedOutput: '[1,1,2,3,6,8,10]', isHidden: false },
      { input: '[5,2,8,1,9]', expectedOutput: '[1,2,5,8,9]', isHidden: false },
      { input: '[1]', expectedOutput: '[1]', isHidden: true }
    ],
    starterCode: `def quick_sort(arr, low=0, high=None):
    """
    Quick sort implementation in Python.
    
    Args:
        arr: List of integers to sort
        low: Starting index
        high: Ending index
        
    Returns:
        Sorted list (in-place)
    """
    if high is None:
        high = len(arr) - 1
    
    if low < high:
        # Partition the array
        pivot_index = partition(arr, low, high)
        
        # Recursively sort elements before and after partition
        quick_sort(arr, low, pivot_index - 1)
        quick_sort(arr, pivot_index + 1, high)
    
    return arr

def partition(arr, low, high):
    """
    Partition the array around a pivot.
    
    Args:
        arr: List of integers
        low: Starting index
        high: Ending index
        
    Returns:
        Final position of pivot
    """
    # Your code here
    pass`,
    solution: `def quick_sort(arr, low=0, high=None):
    """
    Quick sort implementation in Python.
    
    Args:
        arr: List of integers to sort
        low: Starting index
        high: Ending index
        
    Returns:
        Sorted list (in-place)
    """
    if high is None:
        high = len(arr) - 1
    
    if low < high:
        # Partition the array
        pivot_index = partition(arr, low, high)
        
        # Recursively sort elements before and after partition
        quick_sort(arr, low, pivot_index - 1)
        quick_sort(arr, pivot_index + 1, high)
    
    return arr

def partition(arr, low, high):
    """
    Partition the array around a pivot.
    
    Args:
        arr: List of integers
        low: Starting index
        high: Ending index
        
    Returns:
        Final position of pivot
    """
    # Choose the rightmost element as pivot
    pivot = arr[high]
    
    # Index of smaller element
    i = low - 1
    
    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    
    # Place pivot in correct position
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1`,
    hints: [
      'Choose a pivot element (usually last element)',
      'Partition array so elements < pivot are on left',
      'Recursively sort left and right partitions',
      'Average time complexity: O(n log n)'
    ],
    explanation: 'Quick sort works by selecting a pivot element and partitioning the array around it. Elements smaller than pivot go to the left, larger elements go to the right.',
    relatedProblems: ['py-3', 'py-5', 'py-7']
  },

  {
    id: 'py-5',
    title: 'Breadth-First Search (BFS)',
    description: 'Implement BFS algorithm in Python to traverse a graph represented as an adjacency list.',
    difficulty: 'medium',
    category: 'Graph',
    tags: ['python', 'bfs', 'graph', 'queue', 'traversal'],
    timeLimit: 3,
    memoryLimit: 50,
    points: 200,
    testCases: [
      { input: '{"0":["1","2"],"1":["2"],"2":["0","3"],"3":["3"]}\n2', expectedOutput: '[2,0,3,1]', isHidden: false },
      { input: '{"0":["1","2"],"1":["3"],"2":["4"],"3":[],"4":[]}\n0', expectedOutput: '[0,1,2,3,4]', isHidden: false },
      { input: '{"0":["1"],"1":["0"]}\n0', expectedOutput: '[0,1]', isHidden: true }
    ],
    starterCode: `from collections import deque

def bfs(graph, start):
    """
    Breadth-First Search implementation in Python.
    
    Args:
        graph: Dictionary representing adjacency list
        start: Starting vertex
        
    Returns:
        List of visited vertices in BFS order
    """
    # Your code here
    pass`,
    solution: `from collections import deque

def bfs(graph, start):
    """
    Breadth-First Search implementation in Python.
    
    Args:
        graph: Dictionary representing adjacency list
        start: Starting vertex
        
    Returns:
        List of visited vertices in BFS order
    """
    visited = []
    queue = deque([start])
    visited_set = {start}
    
    while queue:
        vertex = queue.popleft()
        visited.append(vertex)
        
        for neighbor in graph.get(vertex, []):
            if neighbor not in visited_set:
                visited_set.add(neighbor)
                queue.append(neighbor)
    
    return visited`,
    hints: [
      'Use a queue (deque) to store vertices to visit',
      'Keep track of visited vertices to avoid cycles',
      'Process vertices level by level',
      'Time complexity: O(V + E)'
    ],
    explanation: 'BFS explores the graph level by level. It uses a queue to keep track of vertices to visit and ensures all vertices at the current level are processed before moving to the next level.',
    relatedProblems: ['py-2', 'py-6', 'py-8']
  },

  {
    id: 'py-6',
    title: 'Depth-First Search (DFS)',
    description: 'Implement DFS algorithm in Python using both recursive and iterative approaches.',
    difficulty: 'medium',
    category: 'Graph',
    tags: ['python', 'dfs', 'graph', 'stack', 'recursion'],
    timeLimit: 3,
    memoryLimit: 50,
    points: 200,
    testCases: [
      { input: '{"0":["1","2"],"1":["2"],"2":["0","3"],"3":["3"]}\n2', expectedOutput: '[2,0,1,3]', isHidden: false },
      { input: '{"0":["1","2"],"1":["3"],"2":["4"],"3":[],"4":[]}\n0', expectedOutput: '[0,1,3,2,4]', isHidden: false },
      { input: '{"0":["1"],"1":["0"]}\n0', expectedOutput: '[0,1]', isHidden: true }
    ],
    starterCode: `def dfs_recursive(graph, start, visited=None):
    """
    Recursive DFS implementation in Python.
    
    Args:
        graph: Dictionary representing adjacency list
        start: Starting vertex
        visited: Set of visited vertices
        
    Returns:
        List of visited vertices in DFS order
    """
    if visited is None:
        visited = set()
    
    # Your code here
    pass

def dfs_iterative(graph, start):
    """
    Iterative DFS implementation in Python.
    
    Args:
        graph: Dictionary representing adjacency list
        start: Starting vertex
        
    Returns:
        List of visited vertices in DFS order
    """
    # Your code here
    pass`,
    solution: `def dfs_recursive(graph, start, visited=None):
    """
    Recursive DFS implementation in Python.
    
    Args:
        graph: Dictionary representing adjacency list
        start: Starting vertex
        visited: Set of visited vertices
        
    Returns:
        List of visited vertices in DFS order
    """
    if visited is None:
        visited = set()
    
    visited.add(start)
    result = [start]
    
    for neighbor in graph.get(start, []):
        if neighbor not in visited:
            result.extend(dfs_recursive(graph, neighbor, visited))
    
    return result

def dfs_iterative(graph, start):
    """
    Iterative DFS implementation in Python.
    
    Args:
        graph: Dictionary representing adjacency list
        start: Starting vertex
        
    Returns:
        List of visited vertices in DFS order
    """
    visited = []
    stack = [start]
    visited_set = {start}
    
    while stack:
        vertex = stack.pop()
        visited.append(vertex)
        
        for neighbor in reversed(graph.get(vertex, [])):
            if neighbor not in visited_set:
                visited_set.add(neighbor)
                stack.append(neighbor)
    
    return visited`,
    hints: [
      'Recursive: Use function call stack, mark visited before recursion',
      'Iterative: Use explicit stack, process neighbors in reverse order',
      'Keep track of visited vertices to avoid cycles',
      'Time complexity: O(V + E)'
    ],
    explanation: 'DFS explores as far as possible along each branch before backtracking. The recursive version uses the call stack, while the iterative version uses an explicit stack.',
    relatedProblems: ['py-5', 'py-7', 'py-9']
  },

  {
    id: 'py-7',
    title: 'Dijkstra\'s Algorithm',
    description: 'Implement Dijkstra\'s shortest path algorithm in Python using a priority queue.',
    difficulty: 'hard',
    category: 'Graph',
    tags: ['python', 'dijkstra', 'shortest-path', 'priority-queue', 'graph'],
    timeLimit: 5,
    memoryLimit: 50,
    points: 500,
    testCases: [
      { input: '{"A":{"B":4,"C":2},"B":{"A":4,"C":1,"D":5},"C":{"A":2,"B":1,"D":8},"D":{"B":5,"C":8}}\n"A"', expectedOutput: '{"A":0,"B":3,"C":2,"D":8}', isHidden: false },
      { input: '{"0":{"1":4,"2":1},"1":{"0":4,"2":2,"3":5},"2":{"0":1,"1":2,"3":8},"3":{"1":5,"2":8}}\n"0"', expectedOutput: '{"0":0,"1":3,"2":1,"3":8}', isHidden: false },
      { input: '{"A":{"B":1},"B":{"A":1}}\n"A"', expectedOutput: '{"A":0,"B":1}', isHidden: true }
    ],
    starterCode: `import heapq

def dijkstra(graph, start):
    """
    Dijkstra's shortest path algorithm implementation in Python.
    
    Args:
        graph: Dictionary representing weighted adjacency list
        start: Starting vertex
        
    Returns:
        Dictionary of shortest distances from start to all vertices
    """
    # Your code here
    pass`,
    solution: `import heapq

def dijkstra(graph, start):
    """
    Dijkstra's shortest path algorithm implementation in Python.
    
    Args:
        graph: Dictionary representing weighted adjacency list
        start: Starting vertex
        
    Returns:
        Dictionary of shortest distances from start to all vertices
    """
    # Initialize distances
    distances = {vertex: float('infinity') for vertex in graph}
    distances[start] = 0
    
    # Priority queue: (distance, vertex)
    pq = [(0, start)]
    visited = set()
    
    while pq:
        current_distance, current_vertex = heapq.heappop(pq)
        
        if current_vertex in visited:
            continue
            
        visited.add(current_vertex)
        
        # Check all neighbors
        for neighbor, weight in graph[current_vertex].items():
            distance = current_distance + weight
            
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(pq, (distance, neighbor))
    
    return distances`,
    hints: [
      'Use a priority queue (heapq) to always process closest vertex',
      'Initialize all distances to infinity except start (0)',
      'Update distances when finding shorter paths',
      'Time complexity: O((V + E) log V)'
    ],
    explanation: 'Dijkstra\'s algorithm finds the shortest path from a source vertex to all other vertices in a weighted graph. It uses a greedy approach, always processing the closest unvisited vertex.',
    relatedProblems: ['py-5', 'py-6', 'py-8']
  },

  {
    id: 'py-8',
    title: 'Dynamic Programming - Fibonacci',
    description: 'Implement Fibonacci sequence using dynamic programming techniques in Python.',
    difficulty: 'easy',
    category: 'Dynamic Programming',
    tags: ['python', 'dynamic-programming', 'fibonacci', 'memoization'],
    timeLimit: 2,
    memoryLimit: 50,
    points: 150,
    testCases: [
      { input: '10', expectedOutput: '55', isHidden: false },
      { input: '0', expectedOutput: '0', isHidden: false },
      { input: '20', expectedOutput: '6765', isHidden: true }
    ],
    starterCode: `def fibonacci(n):
    """
    Calculate nth Fibonacci number using dynamic programming.
    
    Args:
        n: Position in Fibonacci sequence
        
    Returns:
        nth Fibonacci number
    """
    # Your code here
    pass

def fibonacci_memo(n, memo=None):
    """
    Calculate nth Fibonacci number using memoization.
    
    Args:
        n: Position in Fibonacci sequence
        memo: Dictionary for memoization
        
    Returns:
        nth Fibonacci number
    """
    if memo is None:
        memo = {}
    
    # Your code here
    pass`,
    solution: `def fibonacci(n):
    """
    Calculate nth Fibonacci number using dynamic programming.
    
    Args:
        n: Position in Fibonacci sequence
        
    Returns:
        nth Fibonacci number
    """
    if n <= 1:
        return n
    
    prev2, prev1 = 0, 1
    
    for i in range(2, n + 1):
        current = prev1 + prev2
        prev2 = prev1
        prev1 = current
    
    return prev1

def fibonacci_memo(n, memo=None):
    """
    Calculate nth Fibonacci number using memoization.
    
    Args:
        n: Position in Fibonacci sequence
        memo: Dictionary for memoization
        
    Returns:
        nth Fibonacci number
    """
    if memo is None:
        memo = {}
    
    if n in memo:
        return memo[n]
    
    if n <= 1:
        return n
    
    memo[n] = fibonacci_memo(n - 1, memo) + fibonacci_memo(n - 2, memo)
    return memo[n]`,
    hints: [
      'Bottom-up approach: build from base cases',
      'Top-down approach: use memoization to cache results',
      'Space optimization: only keep last two values',
      'Time complexity: O(n), Space complexity: O(1) for bottom-up'
    ],
    explanation: 'Dynamic programming solves Fibonacci efficiently by avoiding redundant calculations. Bottom-up builds iteratively, while top-down uses memoization to cache recursive results.',
    relatedProblems: ['py-9', 'py-10', 'py-11']
  },

  {
    id: 'py-9',
    title: 'Longest Common Subsequence',
    description: 'Implement the Longest Common Subsequence algorithm using dynamic programming in Python.',
    difficulty: 'medium',
    category: 'Dynamic Programming',
    tags: ['python', 'dynamic-programming', 'lcs', 'string', '2d-dp'],
    timeLimit: 3,
    memoryLimit: 50,
    points: 300,
    testCases: [
      { input: '"abcde"\n"ace"', expectedOutput: '3', isHidden: false },
      { input: '"abc"\n"abc"', expectedOutput: '3', isHidden: false },
      { input: '"abc"\n"def"', expectedOutput: '0', isHidden: true }
    ],
    starterCode: `def longest_common_subsequence(text1, text2):
    """
    Find the length of longest common subsequence.
    
    Args:
        text1: First string
        text2: Second string
        
    Returns:
        Length of LCS
    """
    # Your code here
    pass`,
    solution: `def longest_common_subsequence(text1, text2):
    """
    Find the length of longest common subsequence.
    
    Args:
        text1: First string
        text2: Second string
        
    Returns:
        Length of LCS
    """
    m, n = len(text1), len(text2)
    
    # Create DP table
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    # Fill DP table
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i - 1] == text2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    
    return dp[m][n]`,
    hints: [
      'Use 2D DP table where dp[i][j] represents LCS length',
      'If characters match: dp[i][j] = dp[i-1][j-1] + 1',
      'If characters don\'t match: dp[i][j] = max(dp[i-1][j], dp[i][j-1])',
      'Time complexity: O(m*n), Space complexity: O(m*n)'
    ],
    explanation: 'LCS uses 2D dynamic programming. We build a table where each cell represents the LCS length of the substrings ending at those positions.',
    relatedProblems: ['py-8', 'py-10', 'py-11']
  },

  {
    id: 'py-10',
    title: 'Knapsack Problem',
    description: 'Solve the 0/1 Knapsack problem using dynamic programming in Python.',
    difficulty: 'hard',
    category: 'Dynamic Programming',
    tags: ['python', 'dynamic-programming', 'knapsack', 'optimization'],
    timeLimit: 5,
    memoryLimit: 50,
    points: 500,
    testCases: [
      { input: '[1,3,4,5]\n[1,4,5,7]\n7', expectedOutput: '9', isHidden: false },
      { input: '[10,20,30]\n[60,100,120]\n50', expectedOutput: '220', isHidden: false },
      { input: '[1,2,3]\n[10,15,40]\n6', expectedOutput: '65', isHidden: true }
    ],
    starterCode: `def knapsack(weights, values, capacity):
    """
    Solve 0/1 Knapsack problem using dynamic programming.
    
    Args:
        weights: List of item weights
        values: List of item values
        capacity: Maximum weight capacity
        
    Returns:
        Maximum value that can be obtained
    """
    # Your code here
    pass`,
    solution: `def knapsack(weights, values, capacity):
    """
    Solve 0/1 Knapsack problem using dynamic programming.
    
    Args:
        weights: List of item weights
        values: List of item values
        capacity: Maximum weight capacity
        
    Returns:
        Maximum value that can be obtained
    """
    n = len(weights)
    
    # Create DP table
    dp = [[0 for _ in range(capacity + 1)] for _ in range(n + 1)]
    
    # Fill DP table
    for i in range(1, n + 1):
        for w in range(1, capacity + 1):
            if weights[i - 1] <= w:
                # Take the maximum of including or excluding the item
                dp[i][w] = max(values[i - 1] + dp[i - 1][w - weights[i - 1]], 
                              dp[i - 1][w])
            else:
                # Cannot include the item
                dp[i][w] = dp[i - 1][w]
    
    return dp[n][capacity]`,
    hints: [
      'Use 2D DP table where dp[i][w] is max value for first i items with weight w',
      'For each item, decide whether to include it or not',
      'If weight allows: max(include item, exclude item)',
      'Time complexity: O(n*capacity), Space complexity: O(n*capacity)'
    ],
    explanation: 'The knapsack problem uses 2D dynamic programming. For each item and weight capacity, we decide whether to include the item or not, choosing the option that gives maximum value.',
    relatedProblems: ['py-8', 'py-9', 'py-11']
  }
];

