import { Problem } from '../types';

export const problems: Problem[] = [
  // Les Opérateurs
  {
    id: 'op-1',
    title: 'Les Opérateurs Arithmétiques',
    description: 'Apprendre les opérateurs arithmétiques de base en Python et en algorithme.',
    difficulty: 'easy',
    category: 'Opérateurs',
    tags: ['opérateurs', 'arithmétique', 'python', 'algorithme'],
    timeLimit: 15,
    memoryLimit: 64,
    points: 10,
    testCases: [
      {
        input: 'Example: a = 10, b = 3',
        expectedOutput: '13\n7\n30\n3.3333333333333335\n3\n1',
        isHidden: false
      }
    ],
    starterCode: '# Écrivez un programme qui utilise tous les opérateurs arithmétiques\n# +, -, *, /, //, %\n\n',
    solution: '# Solution complète\nprint("Opérateurs arithmétiques:")\nprint("Addition:", 10 + 3)\nprint("Soustraction:", 10 - 3)\nprint("Multiplication:", 10 * 3)\nprint("Division:", 10 / 3)\nprint("Division entière:", 10 // 3)\nprint("Modulo:", 10 % 3)',
    hints: [
      'Utilisez les opérateurs +, -, *, /, //, %',
      'La division entière // donne le quotient sans reste',
      'Le modulo % donne le reste de la division'
    ],
    explanation: 'Les opérateurs arithmétiques permettent d\'effectuer des calculs mathématiques de base. En Python, / fait une division réelle, // fait une division entière, et % donne le reste.',
    relatedProblems: ['op-2', 'op-3']
  },
  {
    id: 'op-2',
    title: 'Les Opérateurs Logiques',
    description: 'Comprendre les opérateurs logiques not, and, or en Python.',
    difficulty: 'easy',
    category: 'Opérateurs',
    tags: ['opérateurs', 'logique', 'booléen', 'python'],
    timeLimit: 15,
    memoryLimit: 64,
    points: 10,
    testCases: [
      {
        input: 'Example: a = True, b = False',
        expectedOutput: 'False\nFalse\nTrue',
        isHidden: false
      }
    ],
    starterCode: '# Utilisez les opérateurs logiques not, and, or\n\n',
    solution: 'a = True\nb = False\nprint("not a:", not a)\nprint("a and b:", a and b)\nprint("a or b:", a or b)',
    hints: [
      'not inverse la valeur booléenne',
      'and retourne True si les deux conditions sont vraies',
      'or retourne True si au moins une condition est vraie'
    ],
    explanation: 'Les opérateurs logiques permettent de combiner des conditions booléennes. not inverse la valeur, and nécessite que les deux conditions soient vraies, or nécessite qu\'au moins une condition soit vraie.',
    relatedProblems: ['op-1', 'op-3']
  },
  {
    id: 'op-3',
    title: 'Les Opérateurs de Comparaison',
    description: 'Maîtriser les opérateurs de comparaison ==, !=, >, >=, <, <=.',
    difficulty: 'easy',
    category: 'Opérateurs',
    tags: ['opérateurs', 'comparaison', 'python'],
    timeLimit: 15,
    memoryLimit: 64,
    points: 10,
    testCases: [
      {
        input: 'Example: a = 10, b = 5',
        expectedOutput: 'False\nTrue\nTrue\nTrue\nFalse\nFalse',
        isHidden: false
      }
    ],
    starterCode: '# Utilisez les opérateurs de comparaison\n\n',
    solution: 'a = 10\nb = 5\nprint("a == b:", a == b)\nprint("a != b:", a != b)\nprint("a > b:", a > b)\nprint("a >= b:", a >= b)\nprint("a < b:", a < b)\nprint("a <= b:", a <= b)',
    hints: [
      '== teste l\'égalité',
      '!= teste l\'inégalité',
      '>, >=, <, <= comparent les valeurs'
    ],
    explanation: 'Les opérateurs de comparaison permettent de comparer deux valeurs et retournent un booléen (True ou False).',
    relatedProblems: ['op-1', 'op-2']
  },

  // Les Fonctions et Méthodes prédéfinies
  {
    id: 'func-1',
    title: 'Fonctions sur les Entiers et Réels',
    description: 'Apprendre les fonctions prédéfinies pour les nombres : str(), chr(), abs(), float(), round(), randint().',
    difficulty: 'easy',
    category: 'Fonctions',
    tags: ['fonctions', 'nombres', 'python', 'math'],
    timeLimit: 20,
    memoryLimit: 64,
    points: 15,
    testCases: [
      {
        input: 'Example: Use the functions with these values: 42, 65, -5, 10, 3.14159, random 1-10',
        expectedOutput: '42\nA\n5\n10.0\n3.14\n[1-10]',
        isHidden: false
      }
    ],
    starterCode: 'from random import *\n# Utilisez les fonctions str(), chr(), abs(), float(), round(), randint()\n\n',
    solution: 'from random import *\nprint("str(42):", str(42))\nprint("chr(65):", chr(65))\nprint("abs(-5):", abs(-5))\nprint("float(10):", float(10))\nprint("round(3.14159, 2):", round(3.14159, 2))\nprint("randint(1, 10):", randint(1, 10))',
    hints: [
      'str() convertit un nombre en chaîne',
      'chr() retourne le caractère correspondant au code ASCII',
      'abs() retourne la valeur absolue',
      'float() convertit en nombre réel',
      'round() arrondit à n décimales',
      'randint() génère un nombre aléatoire'
    ],
    explanation: 'Ces fonctions prédéfinies facilitent la manipulation des nombres. str() convertit en chaîne, chr() donne le caractère ASCII, abs() la valeur absolue, float() convertit en réel, round() arrondit, et randint() génère un aléatoire.',
    relatedProblems: ['func-2', 'func-3']
  },
  {
    id: 'func-2',
    title: 'Fonctions sur les Chaînes de Caractères',
    description: 'Maîtriser les fonctions de manipulation des chaînes : len(), find(), upper(), isdigit().',
    difficulty: 'medium',
    category: 'Fonctions',
    tags: ['fonctions', 'chaînes', 'python', 'string'],
    timeLimit: 25,
    memoryLimit: 64,
    points: 20,
    testCases: [
      {
        input: 'Example: Use string "Hello World" and test "123", "abc"',
        expectedOutput: '11\n6\nHELLO WORLD\nTrue\nFalse',
        isHidden: false
      }
    ],
    starterCode: '# Utilisez les fonctions de chaînes : len(), find(), upper(), isdigit()\n\n',
    solution: 'ch = "Hello World"\nprint("Longueur:", len(ch))\nprint("Position de \'World\':", ch.find("World"))\nprint("En majuscules:", ch.upper())\nprint("\'123\' est numérique:", "123".isdigit())\nprint("\'abc\' est numérique:", "abc".isdigit())',
    hints: [
      'len() retourne la longueur de la chaîne',
      'find() cherche la position d\'une sous-chaîne',
      'upper() convertit en majuscules',
      'isdigit() vérifie si tous les caractères sont des chiffres'
    ],
    explanation: 'Les fonctions de chaînes permettent de manipuler et analyser les textes. len() donne la longueur, find() cherche une sous-chaîne, upper() met en majuscules, et isdigit() vérifie si c\'est numérique.',
    relatedProblems: ['func-1', 'func-3']
  },

  // Les Types
  {
    id: 'type-1',
    title: 'Types Simples',
    description: 'Comprendre les types de données de base : entier, réel, caractère, chaîne, booléen.',
    difficulty: 'easy',
    category: 'Types',
    tags: ['types', 'données', 'python', 'variables'],
    timeLimit: 15,
    memoryLimit: 64,
    points: 10,
    testCases: [
      {
        input: 'entier = 42\nreel = 3.14\ncaractere = "A"\nchaine = "Bonjour"\nbooleen = True\nprint(type(entier))\nprint(type(reel))\nprint(type(caractere))\nprint(type(chaine))\nprint(type(booleen))',
        expectedOutput: "<class 'int'>\n<class 'float'>\n<class 'str'>\n<class 'str'>\n<class 'bool'>",
        isHidden: false
      }
    ],
    starterCode: '# Déclarez des variables de différents types\n\n',
    solution: 'entier = 42\nreel = 3.14\ncaractere = "A"\nchaine = "Bonjour"\nbooleen = True\nprint("Type entier:", type(entier))\nprint("Type réel:", type(reel))\nprint("Type caractère:", type(caractere))\nprint("Type chaîne:", type(chaine))\nprint("Type booléen:", type(booleen))',
    hints: [
      'int pour les entiers',
      'float pour les réels',
      'str pour les caractères et chaînes',
      'bool pour les booléens'
    ],
    explanation: 'Python utilise des types dynamiques. int pour les entiers, float pour les réels, str pour les textes, et bool pour les valeurs booléennes (True/False).',
    relatedProblems: ['type-2', 'type-3']
  },
  {
    id: 'type-2',
    title: 'Tableaux (Arrays)',
    description: 'Apprendre à créer et manipuler des tableaux avec numpy.',
    difficulty: 'medium',
    category: 'Types',
    tags: ['tableaux', 'arrays', 'numpy', 'python'],
    timeLimit: 25,
    memoryLimit: 128,
    points: 20,
    testCases: [
      {
        input: 'from numpy import *\nT = array([int] * 5)\nfor i in range(5):\n    T[i] = i + 1\nprint(T)\nprint(T[0], T[4])',
        expectedOutput: '[1 2 3 4 5]\n1 5',
        isHidden: false
      }
    ],
    starterCode: 'from numpy import *\n# Créez un tableau de 5 entiers et remplissez-le\n\n',
    solution: 'from numpy import *\nT = array([int] * 5)\nfor i in range(5):\n    T[i] = i + 1\nprint("Tableau:", T)\nprint("Premier élément:", T[0])\nprint("Dernier élément:", T[4])',
    hints: [
      'Utilisez array([int] * taille) pour créer un tableau',
      'Accédez aux éléments avec T[index]',
      'Les indices commencent à 0'
    ],
    explanation: 'Les tableaux permettent de stocker plusieurs valeurs du même type. On les crée avec array([type] * taille) et on accède aux éléments par leur index.',
    relatedProblems: ['type-1', 'type-3', 'algo-1']
  },

  // Structures de Contrôle
  {
    id: 'control-1',
    title: 'Structure Conditionnelle (if/elif/else)',
    description: 'Maîtriser les structures conditionnelles en Python.',
    difficulty: 'easy',
    category: 'Structures de Contrôle',
    tags: ['condition', 'if', 'elif', 'else', 'python'],
    timeLimit: 20,
    memoryLimit: 64,
    points: 15,
    testCases: [
      {
        input: 'note = 85\nif note >= 90:\n    print("Excellent")\nelif note >= 80:\n    print("Très bien")\nelif note >= 70:\n    print("Bien")\nelse:\n    print("À améliorer")',
        expectedOutput: 'Très bien',
        isHidden: false
      }
    ],
    starterCode: '# Écrivez une structure conditionnelle pour évaluer une note\n\n',
    solution: 'note = 85\nif note >= 90:\n    print("Excellent")\nelif note >= 80:\n    print("Très bien")\nelif note >= 70:\n    print("Bien")\nelse:\n    print("À améliorer")',
    hints: [
      'Utilisez if pour la première condition',
      'elif pour les conditions suivantes',
      'else pour le cas par défaut'
    ],
    explanation: 'Les structures conditionnelles permettent d\'exécuter du code selon des conditions. if teste la première condition, elif teste les suivantes, et else exécute le code par défaut.',
    relatedProblems: ['control-2', 'control-3']
  },
  {
    id: 'control-2',
    title: 'Boucles For',
    description: 'Apprendre à utiliser les boucles for avec range().',
    difficulty: 'easy',
    category: 'Structures de Contrôle',
    tags: ['boucles', 'for', 'range', 'python'],
    timeLimit: 20,
    memoryLimit: 64,
    points: 15,
    testCases: [
      {
        input: 'print("Boucle croissante:")\nfor i in range(5):\n    print(i)\nprint("Boucle décroissante:")\nfor i in range(5, 0, -1):\n    print(i)',
        expectedOutput: 'Boucle croissante:\n0\n1\n2\n3\n4\nBoucle décroissante:\n5\n4\n3\n2\n1',
        isHidden: false
      }
    ],
    starterCode: '# Écrivez deux boucles for : une croissante et une décroissante\n\n',
    solution: 'print("Boucle croissante:")\nfor i in range(5):\n    print(i)\nprint("Boucle décroissante:")\nfor i in range(5, 0, -1):\n    print(i)',
    hints: [
      'range(n) va de 0 à n-1',
      'range(début, fin) va de début à fin-1',
      'range(début, fin, pas) va de début à fin-1 avec le pas spécifié'
    ],
    explanation: 'Les boucles for permettent de répéter du code. range(n) va de 0 à n-1, range(début, fin) va de début à fin-1, et range(début, fin, pas) permet de spécifier le pas.',
    relatedProblems: ['control-1', 'control-3']
  },
  {
    id: 'control-3',
    title: 'Boucles While',
    description: 'Comprendre les boucles while et leur utilisation.',
    difficulty: 'medium',
    category: 'Structures de Contrôle',
    tags: ['boucles', 'while', 'condition', 'python'],
    timeLimit: 25,
    memoryLimit: 64,
    points: 20,
    testCases: [
      {
        input: 'i = 1\nwhile i < 6:\n    print(i)\n    i = i + 1',
        expectedOutput: '1\n2\n3\n4\n5',
        isHidden: false
      }
    ],
    starterCode: '# Écrivez une boucle while qui affiche les nombres de 1 à 5\n\n',
    solution: 'i = 1\nwhile i < 6:\n    print(i)\n    i = i + 1',
    hints: [
      'while teste une condition',
      'N\'oubliez pas d\'incrémenter la variable de contrôle',
      'Sinon vous aurez une boucle infinie'
    ],
    explanation: 'Les boucles while répètent du code tant qu\'une condition est vraie. Il faut s\'assurer de modifier la variable de contrôle pour éviter les boucles infinies.',
    relatedProblems: ['control-1', 'control-2']
  },

  // Sous-programmes
  {
    id: 'sub-1',
    title: 'Fonctions',
    description: 'Apprendre à créer et utiliser des fonctions en Python.',
    difficulty: 'medium',
    category: 'Sous-programmes',
    tags: ['fonctions', 'def', 'return', 'python'],
    timeLimit: 30,
    memoryLimit: 64,
    points: 25,
    testCases: [
      {
        input: 'def puissance(x, y):\n    p = 1\n    for i in range(y):\n        p = p * x\n    return p\n\nresultat = puissance(5, 2)\nprint(resultat)',
        expectedOutput: '25',
        isHidden: false
      }
    ],
    starterCode: '# Créez une fonction qui calcule x puissance y\n\n',
    solution: 'def puissance(x, y):\n    p = 1\n    for i in range(y):\n        p = p * x\n    return p\n\nresultat = puissance(5, 2)\nprint("5^2 =", resultat)',
    hints: [
      'Utilisez def pour définir une fonction',
      'return pour retourner une valeur',
      'Appelez la fonction avec ses paramètres'
    ],
    explanation: 'Les fonctions permettent de réutiliser du code. On les définit avec def, on utilise return pour retourner une valeur, et on les appelle avec leurs paramètres.',
    relatedProblems: ['sub-2', 'sub-3']
  },
  {
    id: 'sub-2',
    title: 'Procédures',
    description: 'Comprendre la différence entre fonctions et procédures.',
    difficulty: 'medium',
    category: 'Sous-programmes',
    tags: ['procédures', 'fonctions', 'def', 'python'],
    timeLimit: 25,
    memoryLimit: 64,
    points: 20,
    testCases: [
      {
        input: 'def afficher_table(n):\n    for i in range(1, 11):\n        print(f"{n} x {i} = {n * i}")\n\nafficher_table(5)',
        expectedOutput: '5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50',
        isHidden: false
      }
    ],
    starterCode: '# Créez une procédure qui affiche la table de multiplication\n\n',
    solution: 'def afficher_table(n):\n    for i in range(1, 11):\n        print(f"{n} x {i} = {n * i}")\n\nafficher_table(5)',
    hints: [
      'Les procédures ne retournent pas de valeur',
      'Elles effectuent des actions (affichage, modification)',
      'Pas de return nécessaire'
    ],
    explanation: 'Les procédures sont des sous-programmes qui ne retournent pas de valeur. Elles effectuent des actions comme l\'affichage ou la modification de variables.',
    relatedProblems: ['sub-1', 'sub-3']
  },

  // Algorithmes de Tri
  {
    id: 'algo-1',
    title: 'Tri à Bulles (Bubble Sort)',
    description: 'Implémenter l\'algorithme de tri à bulles en Python.',
    difficulty: 'medium',
    category: 'Algorithmes de Tri',
    tags: ['tri', 'bubble-sort', 'algorithme', 'python'],
    timeLimit: 30,
    memoryLimit: 128,
    points: 30,
    testCases: [
      {
        input: 'def tri_bulles(arr):\n    n = len(arr)\n    for i in range(n - 1):\n        for j in range(n - i - 1):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n    return arr\n\nprint(tri_bulles([64, 34, 25, 12, 22, 11, 90]))',
        expectedOutput: '[11, 12, 22, 25, 34, 64, 90]',
        isHidden: false
      }
    ],
    starterCode: 'def tri_bulles(arr):\n    # Implémentez le tri à bulles\n    pass\n\n',
    solution: 'def tri_bulles(arr):\n    n = len(arr)\n    for i in range(n - 1):\n        for j in range(n - i - 1):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n    return arr\n\nprint("Tri à bulles:", tri_bulles([64, 34, 25, 12, 22, 11, 90]))',
    hints: [
      'Comparez les éléments adjacents',
      'Échangez-les s\'ils sont dans le mauvais ordre',
      'Répétez jusqu\'à ce que le tableau soit trié'
    ],
    explanation: 'Le tri à bulles compare les éléments adjacents et les échange s\'ils sont dans le mauvais ordre. Il répète ce processus jusqu\'à ce que le tableau soit trié. Complexité : O(n²).',
    relatedProblems: ['algo-2', 'algo-3', 'algo-4']
  },
  {
    id: 'algo-2',
    title: 'Tri par Insertion (Insertion Sort)',
    description: 'Implémenter l\'algorithme de tri par insertion en Python.',
    difficulty: 'medium',
    category: 'Algorithmes de Tri',
    tags: ['tri', 'insertion-sort', 'algorithme', 'python'],
    timeLimit: 30,
    memoryLimit: 128,
    points: 30,
    testCases: [
      {
        input: 'def tri_insertion(arr):\n    for i in range(1, len(arr)):\n        cle = arr[i]\n        j = i - 1\n        while j >= 0 and arr[j] > cle:\n            arr[j + 1] = arr[j]\n            j -= 1\n        arr[j + 1] = cle\n    return arr\n\nprint(tri_insertion([64, 34, 25, 12, 22, 11, 90]))',
        expectedOutput: '[11, 12, 22, 25, 34, 64, 90]',
        isHidden: false
      }
    ],
    starterCode: 'def tri_insertion(arr):\n    # Implémentez le tri par insertion\n    pass\n\n',
    solution: 'def tri_insertion(arr):\n    for i in range(1, len(arr)):\n        cle = arr[i]\n        j = i - 1\n        while j >= 0 and arr[j] > cle:\n            arr[j + 1] = arr[j]\n            j -= 1\n        arr[j + 1] = cle\n    return arr\n\nprint("Tri par insertion:", tri_insertion([64, 34, 25, 12, 22, 11, 90]))',
    hints: [
      'Prenez un élément à la fois',
      'Insérez-le à la bonne position dans la partie triée',
      'Déplacez les éléments plus grands vers la droite'
    ],
    explanation: 'Le tri par insertion prend un élément à la fois et l\'insère à la bonne position dans la partie déjà triée du tableau. Complexité : O(n²) dans le pire cas, O(n) dans le meilleur cas.',
    relatedProblems: ['algo-1', 'algo-3', 'algo-4']
  },
  {
    id: 'algo-3',
    title: 'Tri par Sélection (Selection Sort)',
    description: 'Implémenter l\'algorithme de tri par sélection en Python.',
    difficulty: 'medium',
    category: 'Algorithmes de Tri',
    tags: ['tri', 'selection-sort', 'algorithme', 'python'],
    timeLimit: 30,
    memoryLimit: 128,
    points: 30,
    testCases: [
      {
        input: 'def tri_selection(arr):\n    for i in range(len(arr)):\n        min_idx = i\n        for j in range(i + 1, len(arr)):\n            if arr[j] < arr[min_idx]:\n                min_idx = j\n        arr[i], arr[min_idx] = arr[min_idx], arr[i]\n    return arr\n\nprint(tri_selection([64, 34, 25, 12, 22, 11, 90]))',
        expectedOutput: '[11, 12, 22, 25, 34, 64, 90]',
        isHidden: false
      }
    ],
    starterCode: 'def tri_selection(arr):\n    # Implémentez le tri par sélection\n    pass\n\n',
    solution: 'def tri_selection(arr):\n    for i in range(len(arr)):\n        min_idx = i\n        for j in range(i + 1, len(arr)):\n            if arr[j] < arr[min_idx]:\n                min_idx = j\n        arr[i], arr[min_idx] = arr[min_idx], arr[i]\n    return arr\n\nprint("Tri par sélection:", tri_selection([64, 34, 25, 12, 22, 11, 90]))',
    hints: [
      'Trouvez le plus petit élément',
      'Placez-le au début',
      'Répétez pour le reste du tableau'
    ],
    explanation: 'Le tri par sélection trouve le plus petit élément et le place au début, puis répète ce processus pour le reste du tableau. Complexité : O(n²).',
    relatedProblems: ['algo-1', 'algo-2', 'algo-4']
  },

  // Recherche
  {
    id: 'search-1',
    title: 'Recherche Séquentielle',
    description: 'Implémenter l\'algorithme de recherche séquentielle en Python.',
    difficulty: 'easy',
    category: 'Recherche',
    tags: ['recherche', 'séquentielle', 'algorithme', 'python'],
    timeLimit: 20,
    memoryLimit: 64,
    points: 20,
    testCases: [
      {
        input: 'def recherche_sequentielle(arr, x):\n    for i in range(len(arr)):\n        if arr[i] == x:\n            return i\n    return -1\n\nprint(recherche_sequentielle([64, 34, 25, 12, 22, 11, 90], 25))',
        expectedOutput: '2',
        isHidden: false
      }
    ],
    starterCode: 'def recherche_sequentielle(arr, x):\n    # Implémentez la recherche séquentielle\n    pass\n\n',
    solution: 'def recherche_sequentielle(arr, x):\n    for i in range(len(arr)):\n        if arr[i] == x:\n            return i\n    return -1\n\nprint("Position de 25:", recherche_sequentielle([64, 34, 25, 12, 22, 11, 90], 25))',
    hints: [
      'Parcourez le tableau élément par élément',
      'Comparez chaque élément avec la valeur recherchée',
      'Retournez l\'index si trouvé, -1 sinon'
    ],
    explanation: 'La recherche séquentielle parcourt le tableau élément par élément jusqu\'à trouver la valeur recherchée. Complexité : O(n).',
    relatedProblems: ['search-2']
  },
  {
    id: 'search-2',
    title: 'Recherche Dichotomique (Binary Search)',
    description: 'Implémenter l\'algorithme de recherche dichotomique en Python.',
    difficulty: 'medium',
    category: 'Recherche',
    tags: ['recherche', 'dichotomique', 'binary-search', 'algorithme', 'python'],
    timeLimit: 25,
    memoryLimit: 64,
    points: 25,
    testCases: [
      {
        input: 'def recherche_dichotomique(arr, x):\n    gauche, droite = 0, len(arr) - 1\n    while gauche <= droite:\n        milieu = (gauche + droite) // 2\n        if arr[milieu] == x:\n            return milieu\n        elif arr[milieu] < x:\n            gauche = milieu + 1\n        else:\n            droite = milieu - 1\n    return -1\n\nprint(recherche_dichotomique([11, 12, 22, 25, 34, 64, 90], 25))',
        expectedOutput: '3',
        isHidden: false
      }
    ],
    starterCode: 'def recherche_dichotomique(arr, x):\n    # Implémentez la recherche dichotomique\n    pass\n\n',
    solution: 'def recherche_dichotomique(arr, x):\n    gauche, droite = 0, len(arr) - 1\n    while gauche <= droite:\n        milieu = (gauche + droite) // 2\n        if arr[milieu] == x:\n            return milieu\n        elif arr[milieu] < x:\n            gauche = milieu + 1\n        else:\n            droite = milieu - 1\n    return -1\n\nprint("Position de 25:", recherche_dichotomique([11, 12, 22, 25, 34, 64, 90], 25))',
    hints: [
      'Le tableau doit être trié',
      'Comparez avec l\'élément du milieu',
      'Éliminez la moitié du tableau à chaque étape'
    ],
    explanation: 'La recherche dichotomique divise le tableau en deux à chaque étape en comparant avec l\'élément du milieu. Complexité : O(log n).',
    relatedProblems: ['search-1']
  },

  // Arithmétique
  {
    id: 'math-1',
    title: 'Calcul du PGCD',
    description: 'Implémenter l\'algorithme d\'Euclide pour calculer le PGCD de deux nombres.',
    difficulty: 'medium',
    category: 'Arithmétique',
    tags: ['pgcd', 'euclide', 'math', 'algorithme', 'python'],
    timeLimit: 25,
    memoryLimit: 64,
    points: 25,
    testCases: [
      {
        input: 'def pgcd(a, b):\n    while b:\n        a, b = b, a % b\n    return a\n\nprint(pgcd(48, 18))',
        expectedOutput: '6',
        isHidden: false
      }
    ],
    starterCode: 'def pgcd(a, b):\n    # Implémentez l\'algorithme d\'Euclide\n    pass\n\n',
    solution: 'def pgcd(a, b):\n    while b:\n        a, b = b, a % b\n    return a\n\nprint("PGCD de 48 et 18:", pgcd(48, 18))',
    hints: [
      'Utilisez l\'algorithme d\'Euclide',
      'Répétez : a, b = b, a % b',
      'Arrêtez quand b = 0'
    ],
    explanation: 'L\'algorithme d\'Euclide calcule le PGCD en utilisant la propriété : PGCD(a,b) = PGCD(b, a%b). Il s\'arrête quand le reste est 0.',
    relatedProblems: ['math-2']
  },
  {
    id: 'math-2',
    title: 'Calcul du PPCM',
    description: 'Calculer le PPCM de deux nombres en utilisant le PGCD.',
    difficulty: 'medium',
    category: 'Arithmétique',
    tags: ['ppcm', 'pgcd', 'math', 'algorithme', 'python'],
    timeLimit: 25,
    memoryLimit: 64,
    points: 25,
    testCases: [
      {
        input: 'def pgcd(a, b):\n    while b:\n        a, b = b, a % b\n    return a\n\ndef ppcm(a, b):\n    return (a * b) // pgcd(a, b)\n\nprint(ppcm(48, 18))',
        expectedOutput: '144',
        isHidden: false
      }
    ],
    starterCode: 'def ppcm(a, b):\n    # Calculez le PPCM en utilisant le PGCD\n    pass\n\n',
    solution: 'def pgcd(a, b):\n    while b:\n        a, b = b, a % b\n    return a\n\ndef ppcm(a, b):\n    return (a * b) // pgcd(a, b)\n\nprint("PPCM de 48 et 18:", ppcm(48, 18))',
    hints: [
      'Utilisez la formule : PPCM(a,b) = (a * b) / PGCD(a,b)',
      'Calculez d\'abord le PGCD',
      'Appliquez la formule'
    ],
    explanation: 'Le PPCM peut être calculé en utilisant la relation : PPCM(a,b) = (a × b) / PGCD(a,b). On calcule d\'abord le PGCD puis on applique la formule.',
    relatedProblems: ['math-1']
  }
];

