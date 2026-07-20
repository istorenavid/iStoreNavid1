const params = new URLSearchParams(location.search);
const key = params.get('cat') || 'banks';
const cat = window.APP_DIRECTORY[key] || window.APP_DIRECTORY.banks;

document.title = `${cat.title} | iStoreNavid`;
document.getElementById('catTitle').textContent = cat.title;
document.getElementById('catEmoji').textContent = cat.emoji;

const grid = document.getElementById('appsGrid');

function getDomain(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch (_) {
    return '';
  }
}

function logoUrl(url) {
  const domain = getDomain(url);
  return `https://www.google.com/s2/favicons?sz=256&domain_url=https://${encodeURIComponent(domain)}`;
}

cat.apps.forEach((app) => {
  const [name, desc, url] = app;
  const card = document.createElement('article');
  card.className = 'app-card';

  const image = document.createElement('img');
  image.className = 'official-app-logo';
  image.src = logoUrl(url);
  image.alt = `لوگوی ${name}`;
  image.loading = 'lazy';
  image.referrerPolicy = 'no-referrer';
  image.onerror = () => {
    const domain = getDomain(url);
    image.onerror = null;
    image.src = `https://${domain}/favicon.ico`;
  };

  const content = document.createElement('div');
  content.innerHTML = `
    <h2>${name}</h2>
    <p>${desc}</p>
    <a class="open-app" href="${url}" target="_blank" rel="noopener noreferrer">باز کردن نسخه وب</a>
    <button class="guide-mini" type="button">راهنما</button>
  `;

  content.querySelector('.guide-mini').onclick = () => alert(
    '۱) وب‌اپ را در Safari باز کنید.\n' +
    '۲) دکمه Share را بزنید.\n' +
    '۳) Add to Home Screen را انتخاب کنید.\n' +
    '۴) روی Add بزنید.'
  );

  card.append(image, content);
  grid.appendChild(card);
});
