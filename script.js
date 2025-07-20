const estados = JSON.parse(localStorage.getItem('materias_aprobadas') || '{}');
const contenedor = document.getElementById('malla-container');

function puedeDesbloquear(id) {
  const materia = materias[id];
  return materia.requisitos.length === 0 || materia.requisitos.every(req => estados[req]);
}

function crearColumnaSemestre(numero) {
  const columna = document.createElement('div');
  columna.className = 'columna';
  const titulo = document.createElement('h3');
  titulo.textContent = `Semestre ${numero}`;
  columna.appendChild(titulo);
  return columna;
}

function render() {
  contenedor.innerHTML = '';

  // Agrupar materias por semestre
  const porSemestre = {};
  for (const id in materias) {
    const mat = materias[id];
    if (!porSemestre[mat.semestre]) porSemestre[mat.semestre] = [];
    porSemestre[mat.semestre].push({ ...mat, id });
  }

  // Crear columnas del semestre 1 al 10
  for (let s = 1; s <= 10; s++) {
    const columna = crearColumnaSemestre(s);
    const materiasDelSemestre = porSemestre[s] || [];

    materiasDelSemestre.forEach(m => {
      const div = document.createElement('div');
      const aprobada = estados[m.id];
      const desbloqueada = puedeDesbloquear(m.id) || aprobada;
      div.className = `materia ${m.tipo} ${aprobada ? 'aprobada' : ''} ${desbloqueada ? '' : 'bloqueada'}`;
      div.textContent = m.nombre;
      div.title = desbloqueada ? '' : `Requiere: ${m.requisitos.map(r => materias[r]?.nombre || r).join(', ')}`;
      div.onclick = () => {
        if (!puedeDesbloquear(m.id)) return;
        estados[m.id] = !estados[m.id];
        localStorage.setItem('materias_aprobadas', JSON.stringify(estados));
        render();
      };
      columna.appendChild(div);
    });

    contenedor.appendChild(columna);
  }
}

function resetProgress() {
  localStorage.removeItem('materias_aprobadas');
  render();
}

document.getElementById('reiniciar').addEventListener('click', resetProgress);

render();