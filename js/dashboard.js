
async function fetchStrategies() {
    const token = localStorage.getItem('jwt');
    try {
        const response = await fetch(`${API_URL}/strategies`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const result = await response.json();
        renderStrategies(result.data);
    } catch (error) {
        console.error("Lỗi lấy dữ liệu:", error);
    }
}

function renderStrategies(strategies) {
    const list = document.getElementById('strategy-list');
    list.innerHTML = '';

    strategies.forEach(item => {
        const s = item.attributes;
        const isLocked = !s.isFree; // Kiểm tra field isFree từ Strapi

        const html = `
            <div class="card ${isLocked ? 'locked' : ''}">
                <h3>${s.name}</h3>
                ${isLocked ? '<div class="lock-overlay">🔒 <br> Liên hệ để mở khóa</div>' : ''}
                <div class="blur-content">
                    <p>Winrate: <strong>${s.winrate}%</strong></p>
                    <p>Cặp tiền: ${s.symbol}</p>
                    <hr>
                    <code>Params: ${s.parameters || 'RSI(14), EMA(20,50)'}</code>
                </div>
            </div>
        `;
        list.innerHTML += html;
    });
}

fetchStrategies();
