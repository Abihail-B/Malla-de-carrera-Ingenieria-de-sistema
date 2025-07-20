const materias = {
  'UNI102': { nombre: 'Matemáticas I', tipo: 'basica', requisitos: [], desbloquea: ['SIS107', 'UNI108'] },
  'SIS101': { nombre: 'Intro a Ingeniería de Sistemas', tipo: 'profesional', requisitos: [], desbloquea: ['SIS141'] },
  'SIS103': { nombre: 'Intro a la Programación', tipo: 'basica', requisitos: [], desbloquea: ['SIS109', 'SIS117'] },
  'UNI104': { nombre: 'Competencias Digitales', tipo: 'general', requisitos: [], desbloquea: ['SIS110'] },
  'UNI105': { nombre: 'Redacción Técnica', tipo: 'general', requisitos: [], desbloquea: [] },
  'UNI106': { nombre: 'Inglés I', tipo: 'general', requisitos: [], desbloquea: ['UNI112'] },
  'SIS107': { nombre: 'Estadística Aplicada', tipo: 'basica', requisitos: ['UNI102'], desbloquea: ['SIS113'] },
  'UNI108': { nombre: 'Matemáticas II', tipo: 'basica', requisitos: ['UNI102'], desbloquea: ['SIS114'] },
  // Aquí irían todas las demás materias...
};

const estados = JSON.parse(localStorage.getItem('materias_aprobadas') || '{}');
const grid = document.getElementById('grid');

function puedeDesbloquear(id) {
  return materias[id].requisitos.every(req => estados[req]);
}

function render() {
  grid.innerHTML = '';
  for (const id in materias) {
    const m = materias[id];
    const aprobado = estados[id];
    const desbloqueado = aprobado || puedeDesbloquear(id);
    const div = document.createElement('div');
    div.className = `card ${m.tipo} ${desbloqueado ? '' : 'locked'} ${aprobado ? 'completed' : ''}`;
    div.innerText = m.nombre;
    div.onclick = () => {
      estados[id] = !estados[id];
      localStorage.setItem('materias_aprobadas', JSON.stringify(estados));
      render();
    };
    grid.appendChild(div);
  }
}

function resetProgress() {
  localStorage.removeItem('materias_aprobadas');
  render();
}

render();