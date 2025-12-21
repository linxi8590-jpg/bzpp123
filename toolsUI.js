
        // UI for closing and returning buttons
        function createToolButtons() {
            var returnButton = document.createElement('button');
            returnButton.textContent = '返回';
            returnButton.onclick = function() {
                window.history.back();
            };
            document.body.appendChild(returnButton);

            var closeButton = document.createElement('button');
            closeButton.textContent = '关闭';
            closeButton.onclick = function() {
                window.close();
            };
            document.body.appendChild(closeButton);
        }

        createToolButtons();
    