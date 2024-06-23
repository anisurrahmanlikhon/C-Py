var categories = {
  'loop': {
    'c': `#include <stdio.h>\n\nint main() {\n    for(int i = 0; i < 10; i++) {\n        printf("%d\\n", i);\n    }\n    return 0;\n}`,
    'python': `for i in range(10):\n    print(i)`
  },
  
  'conditional': {
    'c': `#include <stdio.h>\n\nint main() {\n    int x = 10;\n    if (x > 5) {\n        printf("x is greater than 5\\n");\n    } else {\n        printf("x is less than or equal to 5\\n");\n    }\n    return 0;\n}`,
    'python': `x = 10\nif x > 5:\n    print('x is greater than 5')\nelse:\n    print('x is less than or equal to 5')`
  },
  
  'recursion': {
    'c': `#include <stdio.h>\n\nint factorial(int n) {\n    if (n == 0)\n        return 1;\n    else\n        return n * factorial(n - 1);\n}\n\nint main() {\n    int num = 5;\n    printf("Factorial of %d is %d\\n", num, factorial(num));\n    return 0;\n}`,
    'python': `def factorial(n):\n    if n == 0:\n        return 1\n    else:\n        return n * factorial(n - 1)\n\nnum = 5\nprint(f"Factorial of {num} is {factorial(num)}")`
  },
  
  'sorting': {
    'c': `#include <stdio.h>\n\nvoid bubbleSort(int arr[], int n) {\n    int i, j, temp;\n    for (i = 0; i < n-1; i++) {\n        for (j = 0; j < n-i-1; j++) {\n            if (arr[j] > arr[j+1]) {\n                temp = arr[j];\n                arr[j] = arr[j+1];\n                arr[j+1] = temp;\n            }\n        }\n    }\n}\n\nint main() {\n    int arr[] = {64, 34, 25, 12, 22, 11, 90};\n    int n = sizeof(arr)/sizeof(arr[0]);\n    bubbleSort(arr, n);\n    printf("Sorted array: ");\n    for (int i=0; i < n; i++)\n        printf("%d ", arr[i]);\n    printf("\\n");\n    return 0;\n}`,
    'python': `def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n-1):\n        for j in range(0, n-i-1):\n            if arr[j] > arr[j+1]:\n                arr[j], arr[j+1] = arr[j+1], arr[j]\n\narr = [64, 34, 25, 12, 22, 11, 90]\nbubble_sort(arr)\nprint("Sorted array:", arr)`
  }
  // Add more categories and examples as needed
};

function loadCode() {
  var categorySelect = document.getElementById('categorySelect');
  var selectedCategory = categorySelect.value;
  
  var cCodeTextarea = document.getElementById('cCodeTextarea');
  var pyCodeTextarea = document.getElementById('pyCodeTextarea');

  // Retrieve code examples based on selected category and language
  var cCodeExample = categories[selectedCategory]['c'];
  var pyCodeExample = categories[selectedCategory]['python'];

  // Set code examples to textareas
  cCodeTextarea.textContent = cCodeExample;
  pyCodeTextarea.textContent = pyCodeExample;

  // Apply Prism syntax highlighting
  Prism.highlightAll();
}

function copyCode(elementId) {
  var copyText = document.getElementById(elementId);
  var textArea = document.createElement("textarea");
  textArea.value = copyText.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
  alert("Code copied to clipboard");
}

// Initial load on page load
loadCode();
