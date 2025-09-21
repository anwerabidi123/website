import { AlgorithmVisualization } from '../types';

export const visualizations: AlgorithmVisualization[] = [
  {
    id: 'tri-bulles',
    name: 'Tri à Bulles (Bubble Sort)',
    description: 'Un algorithme de tri simple qui compare les éléments adjacents et les échange s\'ils sont dans le mauvais ordre.',
    category: 'Algorithmes de Tri',
    code: `def tri_bulles(arr):
    """
    Implémentation du tri à bulles en Python.
    
    Args:
        arr: Liste d'entiers à trier
        
    Returns:
        Liste triée
    """
    n = len(arr)
    for i in range(n - 1):
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                # Échanger les éléments
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr`,
    complexity: {
      time: 'O(n²)',
      space: 'O(1)'
    },
    steps: [
      {
        step: 1,
        description: 'Commencer avec le premier élément',
        data: [64, 34, 25, 12, 22, 11, 90],
        highlightedIndices: [0],
        variables: { i: 0, j: 0, swapped: false }
      },
      {
        step: 2,
        description: 'Comparer les éléments adjacents',
        data: [64, 34, 25, 12, 22, 11, 90],
        highlightedIndices: [0, 1],
        variables: { i: 0, j: 0, swapped: false }
      },
      {
        step: 3,
        description: 'Échanger si dans le mauvais ordre',
        data: [34, 64, 25, 12, 22, 11, 90],
        highlightedIndices: [0, 1],
        variables: { i: 0, j: 0, swapped: true }
      },
      {
        step: 4,
        description: 'Continuer avec les éléments suivants',
        data: [34, 25, 64, 12, 22, 11, 90],
        highlightedIndices: [1, 2],
        variables: { i: 0, j: 1, swapped: true }
      },
      {
        step: 5,
        description: 'Répéter jusqu\'à ce que le tableau soit trié',
        data: [11, 12, 22, 25, 34, 64, 90],
        highlightedIndices: [0, 1, 2, 3, 4, 5, 6],
        variables: { i: 6, j: 0, swapped: false }
      }
    ]
  },
  {
    id: 'tri-insertion',
    name: 'Tri par Insertion (Insertion Sort)',
    description: 'Un algorithme de tri qui prend un élément à la fois et l\'insère à la bonne position dans la partie triée.',
    category: 'Algorithmes de Tri',
    code: `def tri_insertion(arr):
    """
    Implémentation du tri par insertion en Python.
    
    Args:
        arr: Liste d'entiers à trier
        
    Returns:
        Liste triée
    """
    for i in range(1, len(arr)):
        cle = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > cle:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = cle
    return arr`,
    complexity: {
      time: 'O(n²)',
      space: 'O(1)'
    },
    steps: [
      {
        step: 1,
        description: 'Prendre le premier élément non trié',
        data: [64, 34, 25, 12, 22, 11, 90],
        highlightedIndices: [1],
        variables: { i: 1, cle: 34, j: 0 }
      },
      {
        step: 2,
        description: 'Comparer avec les éléments triés',
        data: [34, 64, 25, 12, 22, 11, 90],
        highlightedIndices: [0, 1],
        variables: { i: 1, cle: 34, j: -1 }
      },
      {
        step: 3,
        description: 'Insérer à la bonne position',
        data: [34, 64, 25, 12, 22, 11, 90],
        highlightedIndices: [0, 1],
        variables: { i: 2, cle: 25, j: 0 }
      },
      {
        step: 4,
        description: 'Continuer avec les éléments suivants',
        data: [25, 34, 64, 12, 22, 11, 90],
        highlightedIndices: [0, 1, 2],
        variables: { i: 3, cle: 12, j: 1 }
      },
      {
        step: 5,
        description: 'Tableau final trié',
        data: [11, 12, 22, 25, 34, 64, 90],
        highlightedIndices: [0, 1, 2, 3, 4, 5, 6],
        variables: { i: 7, cle: 90, j: 5 }
      }
    ]
  },
  {
    id: 'tri-selection',
    name: 'Tri par Sélection (Selection Sort)',
    description: 'Un algorithme de tri qui trouve le plus petit élément et le place au début.',
    category: 'Algorithmes de Tri',
    code: `def tri_selection(arr):
    """
    Implémentation du tri par sélection en Python.
    
    Args:
        arr: Liste d'entiers à trier
        
    Returns:
        Liste triée
    """
    for i in range(len(arr)):
        min_idx = i
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr`,
    complexity: {
      time: 'O(n²)',
      space: 'O(1)'
    },
    steps: [
      {
        step: 1,
        description: 'Trouver le plus petit élément',
        data: [64, 34, 25, 12, 22, 11, 90],
        highlightedIndices: [5],
        variables: { i: 0, min_idx: 5, j: 6 }
      },
      {
        step: 2,
        description: 'Échanger avec le premier élément',
        data: [11, 34, 25, 12, 22, 64, 90],
        highlightedIndices: [0, 5],
        variables: { i: 1, min_idx: 3, j: 6 }
      },
      {
        step: 3,
        description: 'Trouver le prochain plus petit',
        data: [11, 12, 25, 34, 22, 64, 90],
        highlightedIndices: [1, 3],
        variables: { i: 2, min_idx: 4, j: 6 }
      },
      {
        step: 4,
        description: 'Continuer le processus',
        data: [11, 12, 22, 34, 25, 64, 90],
        highlightedIndices: [2, 4],
        variables: { i: 3, min_idx: 4, j: 6 }
      },
      {
        step: 5,
        description: 'Tableau final trié',
        data: [11, 12, 22, 25, 34, 64, 90],
        highlightedIndices: [0, 1, 2, 3, 4, 5, 6],
        variables: { i: 7, min_idx: 6, j: 7 }
      }
    ]
  },
  {
    id: 'recherche-sequentielle',
    name: 'Recherche Séquentielle',
    description: 'Un algorithme de recherche qui parcourt le tableau élément par élément.',
    category: 'Recherche',
    code: `def recherche_sequentielle(arr, x):
    """
    Implémentation de la recherche séquentielle en Python.
    
    Args:
        arr: Liste d'entiers
        x: Valeur à rechercher
        
    Returns:
        Index de la valeur ou -1 si non trouvée
    """
    for i in range(len(arr)):
        if arr[i] == x:
            return i
    return -1`,
    complexity: {
      time: 'O(n)',
      space: 'O(1)'
    },
    steps: [
      {
        step: 1,
        description: 'Commencer la recherche',
        data: [64, 34, 25, 12, 22, 11, 90],
        highlightedIndices: [0],
        variables: { x: 25, i: 0, trouve: false }
      },
      {
        step: 2,
        description: 'Comparer avec le premier élément',
        data: [64, 34, 25, 12, 22, 11, 90],
        highlightedIndices: [0],
        variables: { x: 25, i: 0, trouve: false }
      },
      {
        step: 3,
        description: 'Passer au suivant',
        data: [64, 34, 25, 12, 22, 11, 90],
        highlightedIndices: [1],
        variables: { x: 25, i: 1, trouve: false }
      },
      {
        step: 4,
        description: 'Trouver la valeur',
        data: [64, 34, 25, 12, 22, 11, 90],
        highlightedIndices: [2],
        variables: { x: 25, i: 2, trouve: true }
      }
    ]
  },
  {
    id: 'recherche-dichotomique',
    name: 'Recherche Dichotomique (Binary Search)',
    description: 'Un algorithme de recherche efficace qui divise le tableau en deux à chaque étape.',
    category: 'Recherche',
    code: `def recherche_dichotomique(arr, x):
    """
    Implémentation de la recherche dichotomique en Python.
    
    Args:
        arr: Liste triée d'entiers
        x: Valeur à rechercher
        
    Returns:
        Index de la valeur ou -1 si non trouvée
    """
    gauche, droite = 0, len(arr) - 1
    while gauche <= droite:
        milieu = (gauche + droite) // 2
        if arr[milieu] == x:
            return milieu
        elif arr[milieu] < x:
            gauche = milieu + 1
        else:
            droite = milieu - 1
    return -1`,
    complexity: {
      time: 'O(log n)',
      space: 'O(1)'
    },
    steps: [
      {
        step: 1,
        description: 'Initialiser les bornes',
        data: [11, 12, 22, 25, 34, 64, 90],
        highlightedIndices: [0, 6],
        variables: { x: 25, gauche: 0, droite: 6, milieu: 3 }
      },
      {
        step: 2,
        description: 'Calculer le milieu',
        data: [11, 12, 22, 25, 34, 64, 90],
        highlightedIndices: [3],
        variables: { x: 25, gauche: 0, droite: 6, milieu: 3 }
      },
      {
        step: 3,
        description: 'Comparer avec l\'élément du milieu',
        data: [11, 12, 22, 25, 34, 64, 90],
        highlightedIndices: [3],
        variables: { x: 25, gauche: 0, droite: 6, milieu: 3, trouve: true }
      }
    ]
  },
  {
    id: 'pgcd-euclide',
    name: 'Calcul du PGCD (Algorithme d\'Euclide)',
    description: 'Un algorithme efficace pour calculer le Plus Grand Commun Diviseur de deux nombres.',
    category: 'Arithmétique',
    code: `def pgcd(a, b):
    """
    Calcul du PGCD en utilisant l'algorithme d'Euclide.
    
    Args:
        a: Premier entier
        b: Deuxième entier
        
    Returns:
        PGCD de a et b
    """
    while b:
        a, b = b, a % b
    return a`,
    complexity: {
      time: 'O(log min(a,b))',
      space: 'O(1)'
    },
    steps: [
      {
        step: 1,
        description: 'Initialiser avec les deux nombres',
        data: [48, 18],
        highlightedIndices: [0, 1],
        variables: { a: 48, b: 18, reste: 12 }
      },
      {
        step: 2,
        description: 'Calculer le reste de la division',
        data: [18, 12],
        highlightedIndices: [0, 1],
        variables: { a: 18, b: 12, reste: 6 }
      },
      {
        step: 3,
        description: 'Répéter le processus',
        data: [12, 6],
        highlightedIndices: [0, 1],
        variables: { a: 12, b: 6, reste: 0 }
      },
      {
        step: 4,
        description: 'PGCD trouvé',
        data: [6, 0],
        highlightedIndices: [0],
        variables: { a: 6, b: 0, pgcd: 6 }
      }
    ]
  },
  {
    id: 'ppcm',
    name: 'Calcul du PPCM',
    description: 'Calcul du Plus Petit Commun Multiple en utilisant le PGCD.',
    category: 'Arithmétique',
    code: `def ppcm(a, b):
    """
    Calcul du PPCM en utilisant le PGCD.
    
    Args:
        a: Premier entier
        b: Deuxième entier
        
    Returns:
        PPCM de a et b
    """
    return (a * b) // pgcd(a, b)

def pgcd(a, b):
    while b:
        a, b = b, a % b
    return a`,
    complexity: {
      time: 'O(log min(a,b))',
      space: 'O(1)'
    },
    steps: [
      {
        step: 1,
        description: 'Calculer le PGCD',
        data: [48, 18],
        highlightedIndices: [0, 1],
        variables: { a: 48, b: 18, pgcd: 6 }
      },
      {
        step: 2,
        description: 'Appliquer la formule PPCM = (a × b) / PGCD',
        data: [48, 18],
        highlightedIndices: [0, 1],
        variables: { a: 48, b: 18, pgcd: 6, ppcm: 144 }
      }
    ]
  },
  {
    id: 'factoriel',
    name: 'Calcul de la Factorielle',
    description: 'Calcul de la factorielle d\'un nombre n (n!)',
    category: 'Arithmétique',
    code: `def factoriel(n):
    """
    Calcul de la factorielle d'un nombre.
    
    Args:
        n: Entier positif
        
    Returns:
        n! (factorielle de n)
    """
    if n <= 1:
        return 1
    return n * factoriel(n - 1)`,
    complexity: {
      time: 'O(n)',
      space: 'O(n)'
    },
    steps: [
      {
        step: 1,
        description: 'Appel initial avec n = 5',
        data: [5],
        highlightedIndices: [0],
        variables: { n: 5, resultat: 1 }
      },
      {
        step: 2,
        description: 'Calcul récursif',
        data: [5, 4],
        highlightedIndices: [0, 1],
        variables: { n: 4, resultat: 5 }
      },
      {
        step: 3,
        description: 'Continuer la récursion',
        data: [5, 4, 3],
        highlightedIndices: [0, 1, 2],
        variables: { n: 3, resultat: 20 }
      },
      {
        step: 4,
        description: 'Cas de base atteint',
        data: [5, 4, 3, 2, 1],
        highlightedIndices: [0, 1, 2, 3, 4],
        variables: { n: 1, resultat: 120 }
      }
    ]
  }
];