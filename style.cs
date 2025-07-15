body {
  font-family: 'Segoe UI', sans-serif;
  background-color: #f0f8ff; /* Azul pastel claro */
  text-align: center;
  margin: 0;
  padding: 20px;
}

h1 {
  color: #2c3e50;
  margin-bottom: 30px;
}

.malla {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.semestre {
  background-color: #d9ecf2; /* Celeste muy claro */
  border: 2px solid #a5cfd5;
  border-radius: 10px;
  padding: 10px;
  width: 250px;
}

.semestre h2 {
  color: #2a607c;
  margin-bottom: 10px;
}

.materia {
  background-color: #e0f2f1; /* Verde menta claro */
  border: 1px solid #80cbc4;
  padding: 10px;
  margin: 5px 0;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
}

.bloqueada {
  background-color: #eeeeee; /* Gris claro */
  color: #999;
  border-color: #ccc;
  cursor: not-allowed;
}

.aprobada {
  background-color: #d0f0c0; /* Verde aprobado */
  border-color: #66bb6a;
  color: #2e7d32;
}
