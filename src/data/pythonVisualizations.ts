import { AlgorithmVisualization } from '../types';

export const pythonVisualizations: AlgorithmVisualization[] = [
  {
    id: 'py-1',
    name: 'Bubble Sort',
    description: 'A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.',
    category: 'Sorting',
    code: `def bubble_sort(arr):
    """
    Bubble sort implementation in Python.
    
    Args:
        arr: List of integers to sort
        
    Returns:
        Sorted list
    """
    n = len(arr)
    for i in range(n - 1):
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                # Swap elements
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr`,
    complexity: {
      time: 'O(n²)',
      space: 'O(1)'
    },
    steps: [
      {
        step: 1,
        description: 'Start with the first element',
        data: [64, 34, 25, 12, 22, 11, 90],
        highlightedIndices: [0],
        variables: { i: 0, j: 0, swapped: false }
      },
      {
        step: 2,
        description: 'Compare adjacent elements',
        data: [64, 34, 25, 12, 22, 11, 90],
        highlightedIndices: [0, 1],
        variables: { i: 0, j: 0, swapped: false }
      },
      {
        step: 3,
        description: 'Swap if out of order',
        data: [34, 64, 25, 12, 22, 11, 90],
        highlightedIndices: [0, 1],
        variables: { i: 0, j: 0, swapped: true }
      }
    ]
  },
  {
    id: 'py-2',
    name: 'Binary Search',
    description: 'A search algorithm that finds the position of a target value within a sorted array by repeatedly dividing the search interval in half.',
    category: 'Search',
    code: `def binary_search(arr, target):
    """
    Binary search implementation in Python.
    
    Args:
        arr: Sorted list of integers
        target: Value to search for
        
    Returns:
        Index of target, or -1 if not found
    """
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1`,
    complexity: {
      time: 'O(log n)',
      space: 'O(1)'
    },
    steps: [
      {
        step: 1,
        description: 'Initialize left and right pointers',
        data: [1, 3, 5, 7, 9, 11, 13, 15],
        highlightedIndices: [0, 7],
        variables: { left: 0, right: 7, target: 7 }
      },
      {
        step: 2,
        description: 'Calculate middle index',
        data: [1, 3, 5, 7, 9, 11, 13, 15],
        highlightedIndices: [3],
        variables: { left: 0, right: 7, mid: 3, target: 7 }
      },
      {
        step: 3,
        description: 'Found target at middle',
        data: [1, 3, 5, 7, 9, 11, 13, 15],
        highlightedIndices: [3],
        variables: { left: 0, right: 7, mid: 3, target: 7, found: true }
      }
    ]
  },
  {
    id: 'py-3',
    name: 'Quick Sort',
    description: 'A divide-and-conquer algorithm that picks an element as pivot and partitions the array around the pivot.',
    category: 'Sorting',
    code: `def quick_sort(arr, low=0, high=None):
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
        pivot_index = partition(arr, low, high)
        quick_sort(arr, low, pivot_index - 1)
        quick_sort(arr, pivot_index + 1, high)
    
    return arr

def partition(arr, low, high):
    """Partition the array around a pivot."""
    pivot = arr[high]
    i = low - 1
    
    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1`,
    complexity: {
      time: 'O(n log n) average, O(n²) worst',
      space: 'O(log n)'
    },
    steps: [
      {
        step: 1,
        description: 'Choose pivot (last element)',
        data: [64, 34, 25, 12, 22, 11, 90],
        highlightedIndices: [6],
        variables: { pivot: 90, low: 0, high: 6 }
      },
      {
        step: 2,
        description: 'Partition around pivot',
        data: [64, 34, 25, 12, 22, 11, 90],
        highlightedIndices: [0, 1, 2, 3, 4, 5],
        variables: { pivot: 90, i: -1, j: 0 }
      },
      {
        step: 3,
        description: 'Place pivot in correct position',
        data: [64, 34, 25, 12, 22, 11, 90],
        highlightedIndices: [6],
        variables: { pivot: 90, pivot_index: 6 }
      }
    ]
  },
  {
    id: 'py-4',
    name: 'Breadth-First Search (BFS)',
    description: 'A graph traversal algorithm that explores all vertices at the present depth level before moving on to vertices at the next depth level.',
    category: 'Graph',
    code: `from collections import deque

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
    complexity: {
      time: 'O(V + E)',
      space: 'O(V)'
    },
    steps: [
      {
        step: 1,
        description: 'Initialize queue with start vertex',
        data: [['A', 'B', 'C'], ['A', 'D'], ['A', 'D'], ['B', 'C']],
        highlightedIndices: [0],
        variables: { queue: ['A'], visited: [], start: 'A' }
      },
      {
        step: 2,
        description: 'Process current vertex and add neighbors',
        data: [['A', 'B', 'C'], ['A', 'D'], ['A', 'D'], ['B', 'C']],
        highlightedIndices: [0, 1, 2],
        variables: { queue: ['B', 'C'], visited: ['A'], current: 'A' }
      },
      {
        step: 3,
        description: 'Continue until all vertices visited',
        data: [['A', 'B', 'C'], ['A', 'D'], ['A', 'D'], ['B', 'C']],
        highlightedIndices: [0, 1, 2, 3],
        variables: { queue: [], visited: ['A', 'B', 'C', 'D'] }
      }
    ]
  },
  {
    id: 'py-5',
    name: 'Merge Sort',
    description: 'A divide-and-conquer algorithm that divides the array into two halves, recursively sorts them, and then merges the sorted halves.',
    category: 'Sorting',
    code: `def merge_sort(arr):
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
    """Merge two sorted arrays."""
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
    complexity: {
      time: 'O(n log n)',
      space: 'O(n)'
    },
    steps: [
      {
        step: 1,
        description: 'Divide array into two halves',
        data: [64, 34, 25, 12, 22, 11, 90],
        highlightedIndices: [0, 1, 2, 3, 4, 5, 6],
        variables: { left: [64, 34, 25, 12], right: [22, 11, 90] }
      },
      {
        step: 2,
        description: 'Recursively sort both halves',
        data: [64, 34, 25, 12, 22, 11, 90],
        highlightedIndices: [0, 1, 2, 3, 4, 5, 6],
        variables: { left_sorted: [12, 25, 34, 64], right_sorted: [11, 22, 90] }
      },
      {
        step: 3,
        description: 'Merge sorted halves',
        data: [11, 12, 22, 25, 34, 64, 90],
        highlightedIndices: [0, 1, 2, 3, 4, 5, 6],
        variables: { result: [11, 12, 22, 25, 34, 64, 90] }
      }
    ]
  },
  {
    id: 'py-6',
    name: 'Dijkstra\'s Algorithm',
    description: 'An algorithm for finding the shortest paths between nodes in a weighted graph using a priority queue.',
    category: 'Graph',
    code: `import heapq

def dijkstra(graph, start):
    """
    Dijkstra's shortest path algorithm implementation in Python.
    
    Args:
        graph: Dictionary representing weighted adjacency list
        start: Starting vertex
        
    Returns:
        Dictionary of shortest distances from start to all vertices
    """
    distances = {vertex: float('infinity') for vertex in graph}
    distances[start] = 0
    
    pq = [(0, start)]
    visited = set()
    
    while pq:
        current_distance, current_vertex = heapq.heappop(pq)
        
        if current_vertex in visited:
            continue
            
        visited.add(current_vertex)
        
        for neighbor, weight in graph[current_vertex].items():
            distance = current_distance + weight
            
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(pq, (distance, neighbor))
    
    return distances`,
    complexity: {
      time: 'O((V + E) log V)',
      space: 'O(V)'
    },
    steps: [
      {
        step: 1,
        description: 'Initialize distances and priority queue',
        data: [[0, 4, 2, 0], [4, 0, 1, 5], [2, 1, 0, 8], [0, 5, 8, 0]],
        highlightedIndices: [],
        variables: { start: 'A', distances: { A: 0, B: Infinity, C: Infinity, D: Infinity } }
      },
      {
        step: 2,
        description: 'Process current node and update neighbors',
        data: [[0, 4, 2, 0], [4, 0, 1, 5], [2, 1, 0, 8], [0, 5, 8, 0]],
        highlightedIndices: [0],
        variables: { current: 'A', distances: { A: 0, B: 4, C: 2, D: Infinity } }
      },
      {
        step: 3,
        description: 'Continue until all nodes processed',
        data: [[0, 4, 2, 0], [4, 0, 1, 5], [2, 1, 0, 8], [0, 5, 8, 0]],
        highlightedIndices: [0, 1, 2, 3],
        variables: { distances: { A: 0, B: 3, C: 2, D: 8 } }
      }
    ]
  }
];

