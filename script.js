<script>
    let likes 0;
    let isLiked = false;

    function formatNumber(num) {
        return num.toLocaleString('pt-BR');
    }

    function toggleLike() {
       const likeBtn = document.getElementById('likeBtn');

        if (!isLiked) {
            likes++;
            isLiked = true;
            likeBtn.classList.add('liked');
            likeBtn.innerHTML = `💚 Curtido! <span id="likeCount">${formatNumber(likes)}</span>`;
        } else {
            likes--;
            isLiked = false;
            likeBtn.classList.remove('liked');
            likeBtn.innerHTML = `💜 Curtir <span id="likeCount">${formatNumber(likes)}</span>`;
        }

 </body>

</html>
    

