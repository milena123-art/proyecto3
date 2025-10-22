 <script>
        function cambiarColor() {
            // Lista de colores posibles
            const colores = ["#ff9999", "#99ff99", "#9999ff", "#ffff99", "#ffccff", "#c2f0f7"];
            // Elegir uno al azar
            const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
            // Aplicarlo al fondo
            document.body.style.backgroundColor = colorAleatorio;
        }
    </script>
