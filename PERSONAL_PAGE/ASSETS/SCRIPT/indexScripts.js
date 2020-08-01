window.onload = function() {
            document.getElementById('guardar').onclick = function () {
              guardarCambios();
            }
            document.getElementById('salario').oninput = function () {
              ValSalario();
            }
        }
