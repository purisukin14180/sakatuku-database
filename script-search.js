let players = [];
let ownedPlayers = JSON.parse(localStorage.getItem('ownedPlayers')) || [];
let squadTemp = JSON.parse(sessionStorage.getItem('squadTemp')) || null;

fetch('players.json')
  .then(r => r.json())
  .then(data => { players = data; renderPlayers(); });

function renderPlayers() {
  const list = document.getElementById('player-list');
  list.innerHTML = '';
  const nameFilter = document.getElementById('search-name').value.toLowerCase();
  const ownedOnly = document.getElementById('filter-owned').checked;

  players.forEach(player => {
    if (nameFilter && !player.name.toLowerCase().includes(nameFilter)) return;
    if (ownedOnly && !ownedPlayers.some(p => p.id === player.id)) return;

    const div = document.createElement('div');
    div.className = 'player-card';
    div.innerHTML = `
      <strong>${player.name}</strong><br>
      ${player.position}<br>
      ${player.playstyle}<br>
      <span class="policy-${player.policy.replace(/ポゼッション|カウンター|リアクション|ムービング/g, m => m.toLowerCase())}">${player.policy}</span>
      <div class="player-actions">
        <button class="save">所持選手として保存</button>
        <button class="squad">スカッド登録</button>
      </div>
    `;
    div.addEventListener('click', () => div.classList.toggle('show-actions'));
    div.querySelector('.save').addEventListener('click', e => {
      e.stopPropagation();
      if (!ownedPlayers.some(p => p.id === player.id)) ownedPlayers.push(player);
      localStorage.setItem('ownedPlayers', JSON.stringify(ownedPlayers));
      alert(`${player.name} を所持選手として保存しました`);
    });
    div.querySelector('.squad').addEventListener('click', e => {
      e.stopPropagation();
      // builder.htmlが期待する形式で保存
      const cp=JSON.parse(localStorage.getItem('currentPosition'));
      let formation = 'la-dea';
      if(cp && cp.formation){
        formation = cp.formation;
      }
      localStorage.setItem('selectedPlayer', JSON.stringify(player));
      localStorage.setItem('selectedFormation', formation);
      window.location.href = 'builder.html';
    });
    list.appendChild(div);
  });
}

document.getElementById('search-name').addEventListener('input', renderPlayers);
document.getElementById('filter-owned').addEventListener('change', renderPlayers);

document.getElementById('add-player').addEventListener('click', () => {
  const name = document.getElementById('new-name').value.trim();
  const playStyle = document.getElementById('new-playStyle').value;
  const policy = document.getElementById('new-policy').value;
  if (!name) return alert('名前を入力してください');
  const newPlayer = {id: Date.now(), name, position:'未設定', nationality:'未設定', playstyle: playStyle, policy};
  players.push(newPlayer);
  renderPlayers();
});