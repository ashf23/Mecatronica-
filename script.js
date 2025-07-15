const materias = [
  // [ID, Nombre, Período, [IDs de prerrequisitos]]

  // 📘 1er Período
  [1, "Historia Universal", 1, []],
  [2, "Dibujo Técnico", 1, []],
  [3, "Orientación Institucional", 1, []],
  [4, "Precálculo", 1, []],
  [5, "Redacción Castellana", 1, []],
  [6, "Fundamentos del Computador", 1, []],
  [7, "Ética I", 1, []],
  [8, "Inglés Nivel 1-3", 1, []],

  // 📘 2do Período
  [9, "Cálculo Diferencial", 2, [4]],
  [10, "Física General", 2, [4]],
  [11, "Lab. Física General", 2, [10]], // co-requisito en PDF
  [12, "Historia Dominicana", 2, [1]],
  [13, "Fundamentos de CAD", 2, [2]],
  [14, "Programación para Mecatrónicos", 2, [6]],
  [15, "Educación Física", 2, []],
  [16, "Ing. de los Materiales Aplicada", 2, [4]],
  [17, "Ética II", 2, [7]],
  [18, "Inglés Nivel 4-6", 2, [8]],

  // 📘 3er Período
  [19, "Cálculo Integral", 3, [9]],
  [20, "Física Mecánica", 3, [10]],
  [21, "Lab. Física Mecánica", 3, [20]],
  [22, "Circuitos Eléctricos I", 3, [9]],
  [23, "Lab. Circuitos Eléctricos I", 3, [22]],
  [24, "Seguridad Industrial y Salud Ocupacional", 3, []],
  [25, "Ética III", 3, [17]],
  [26, "Probabilidad y Estadística", 3, [9]],
  [27, "Metrología", 3, [2]],
  [28, "Inglés Nivel 7-9", 3, [18]],

  // 📘 4to Período
  [29, "Circuitos Eléctricos II", 4, [22]],
  [30, "Lab. Circuitos Eléctricos II", 4, [23]],
  [31, "Electrónica I", 4, [22]],
  [32, "Lab. Electrónica I", 4, [31]],
  [33, "Electrónica Digital", 4, [22]],
  [34, "Lab. Electrónica Digital", 4, [33]],
  [35, "Estática y Dinámica Aplicada", 4, [19, 20]],
  [36, "Física Eléctrica", 4, [20]],
  [37, "Lab. Física Eléctrica", 4, [36]],
  [38, "Inglés Nivel 10-12", 4, [28]],

  // 📘 5to Período
  [39, "Electrónica II", 5, [31]],
  [40, "Lab. Electrónica II", 5, [32]],
  [41, "Sistemas Digitales", 5, [33]],
  [42, "Controles Automáticos I", 5, [22, 31]],
  [43, "Instrumentación Industrial", 5, [22, 31]],
  [44, "Metodología de la Investigación", 5, [25]],
  [45, "Administración de Proyectos", 5, [25]],
  [46, "CAD Avanzado", 5, [13]],
  [47, "Inglés Técnico", 5, [38]],

  // 📘 6to Período
  [48, "Electrónica Industrial", 6, [39]],
  [49, "Lab. Electrónica Industrial", 6, [40]],
  [50, "Fundamentos de Máquinas Eléctricas", 6, [42]],
  [51, "Controles Automáticos II", 6, [42]],
  [52, "Microcontroladores", 6, [39, 41]],
  [53, "Procesos de Manufactura", 6, [46, 26]],
  [54, "Desarrollo de Emprendedores", 6, [44]],
  [55, "Sistemas de Control", 6, [39, 42, 51]],

  // 📘 7mo Período
  [56, "Integración de Sistemas Mecatrónicos", 7, [42, 50]],
  [57, "Robótica", 7, [48, 52]],
  [58, "Redes de Comunicación Industrial", 7, [55]],
  [59, "Proyecto Final", 7, [42, 50]],
  [60, "Programación Básica CNC", 7, [48, 52]],
  [61, "Plan de Negocios", 7, [54]],
  [62, "Electiva", 7, []]
];
