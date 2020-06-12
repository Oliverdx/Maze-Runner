var maze = [
  [1, 1, 0, 0],
  [0, 1, 1, 0],
  [9, 1, 0, 0],
  [0, 1, 1, 0],
  [0, 1, 1, 1]
];

function mazeRunner(column, row, treasure) {
  console.log(`Verificando casa: (${column},${row}) - ${maze[column][row]} `);
  if (maze[column][row] === "X")
    console.log(`Voltando para: (${column},${row})`)

  if (maze && maze[column][row] === treasure) {
    console.log(`Achado em: (${column}, ${row})`);
    maze = false;

  } else if (maze && maze[column][row] === 1) {
    console.log(`Andando para: (${column},${row})`)
    maze[column][row] = "X"; // Marcando como visitado (Controle do Loop)

    // Movimento para direita
    if (maze && column < maze.length - 1) {
      mazeRunner(column + 1, row, treasure);
    }
    // Movimento para baixo
    if (maze && row < maze[column].length - 1) {
      mazeRunner(column, row + 1, treasure);
    }
    // Movimento para esquerda
    if (maze && column > 0) {
      mazeRunner(column - 1, row, treasure);
    }
    // Movimento para cima
    if (maze && row > 0) {
      mazeRunner(column, row - 1, treasure);
    }
  }

}

mazeRunner(0, 0, 9);
