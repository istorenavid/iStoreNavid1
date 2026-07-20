# AppleHub


## ارائه‌دهنده

**iStore Navid**  
تجربه‌ای فراتر از یک خرید  
فروش تخصصی محصولات Apple در کرمانشاه  
آدرس: کرمانشاه، ۲۲ بهمن، بلوار سی‌متری دوم، روبه‌روی برج نوین  
نوید نجفی: 09100500518  
Instagram: @istore_navid


یک فهرست استاتیک و قابل نصب از وب‌اپ‌ها و درگاه‌های رسمی ایرانی برای آیفون.

## انتشار روی GitHub Pages

1. یک Repository جدید با نام `AppleHub` بسازید.
2. همه فایل‌های این پوشه را در ریشه Repository آپلود کنید.
3. وارد Settings → Pages شوید.
4. در قسمت Build and deployment، گزینه Deploy from a branch را انتخاب کنید.
5. Branch را روی `main` و Folder را روی `/root` بگذارید و Save کنید.
6. سایت روی آدرسی شبیه زیر منتشر می‌شود:
   `https://USERNAME.github.io/AppleHub/`

## افزودن یا ویرایش سرویس‌ها

فایل `apps.json` را ویرایش کنید. هر آیتم شامل name، category، url و desc است.

## هشدار مهم

- این پروژه نباید اطلاعات ورود، کارت، رمز یا پیامک کاربران را دریافت کند.
- لینک خدمات مالی را فقط از وب‌سایت رسمی همان بانک یا شرکت تأیید کنید.
- فایل `mobileconfig` این نسخه امضا نشده است؛ iOS این موضوع را هنگام نصب نمایش می‌دهد.
- GitHub Pages ممکن است فایل mobileconfig را با MIME عمومی ارائه کند. اگر دانلود مستقیم روی iOS درست عمل نکرد، فایل را روی هاستی قرار دهید که Content-Type آن `application/x-apple-aspen-config` باشد.
- برای تغییر مجموعه آیکون‌های پروفایل، فایل باید دوباره ساخته و توسط کاربر نصب شود.
- const grid=document.querySelector("#grid"), search=document.querySelector("#search"),
category=document.querySelector("#category"), stats=document.querySelector("#stats");
let apps=[];
function esc(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m]))}
function render(){
 const q=search.value.trim().toLowerCase(), c=category.value;
 const filtered=apps.filter(a=>(!c||a.category===c)&&(!q||(a.name+" "+a.desc+" "+a.category).toLowerCase().includes(q)));
 stats.textContent=`${filtered.length} سرویس از ${apps.length} سرویس`;
 grid.innerHTML=filtered.length?filtered.map(a=>`<article class="card">
 <span class="badge">${esc(a.category)}</span><h2>${esc(a.name)}</h2><p>${esc(a.desc)}</p>
 <a class="open" href="${esc(a.url)}" target="_blank" rel="noopener noreferrer">باز کردن درگاه رسمی</a></article>`).join(""):`<div class="empty">چیزی پیدا نشد؛ حتی اینترنت هم گاهی جواب «نه» می‌دهد.</div>`;
}
fetch("./apps.json").then(r=>r.json()).then(data=>{
 apps=data;
 [...new Set(apps.map(a=>a.category))].sort().forEach(c=>category.insertAdjacentHTML("beforeend",`<option>${esc(c)}</option>`));
 render();
}).catch(()=>grid.innerHTML='<div class="empty">فایل apps.json بارگذاری نشد.</div>');
search.addEventListener("input",render);category.addEventListener("change",render);
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>PayloadContent</key>
	<array>
		<dict>
			<key>PayloadType</key>
			<string>com.apple.webClip.managed</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
			<key>PayloadIdentifier</key>
			<string>ir.applehub.webclip.44b48cb37bbd4d33b24c4a226006469c</string>
			<key>PayloadUUID</key>
			<string>9CC9FFBE-8BAF-45D6-B21C-570611930D65</string>
			<key>PayloadDisplayName</key>
			<string>بانک ملت</string>
			<key>Label</key>
			<string>بانک ملت</string>
			<key>URL</key>
			<string>https://mobileweb.bankmellat.ir/</string>
			<key>IsRemovable</key>
			<true/>
			<key>Precomposed</key>
			<true/>
			<key>FullScreen</key>
			<false/>
		</dict>
		<dict>
			<key>PayloadType</key>
			<string>com.apple.webClip.managed</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
			<key>PayloadIdentifier</key>
			<string>ir.applehub.webclip.7eea6d252ae147a1b9522323b301b096</string>
			<key>PayloadUUID</key>
			<string>A9B828BC-4F77-43A9-BADC-203A1E0BB529</string>
			<key>PayloadDisplayName</key>
			<string>بام بانک ملی</string>
			<key>Label</key>
			<string>بام بانک ملی</string>
			<key>URL</key>
			<string>https://my.bmi.ir/</string>
			<key>IsRemovable</key>
			<true/>
			<key>Precomposed</key>
			<true/>
			<key>FullScreen</key>
			<false/>
		</dict>
		<dict>
			<key>PayloadType</key>
			<string>com.apple.webClip.managed</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
			<key>PayloadIdentifier</key>
			<string>ir.applehub.webclip.dd59aff4b42f46118bcba932c06f74b1</string>
			<key>PayloadUUID</key>
			<string>4B9C2556-FE1E-4749-960D-67B58609E836</string>
			<key>PayloadDisplayName</key>
			<string>بانک سپه</string>
			<key>Label</key>
			<string>بانک سپه</string>
			<key>URL</key>
			<string>https://www.banksepah.ir/</string>
			<key>IsRemovable</key>
			<true/>
			<key>Precomposed</key>
			<true/>
			<key>FullScreen</key>
			<false/>
		</dict>
		<dict>
			<key>PayloadType</key>
			<string>com.apple.webClip.managed</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
			<key>PayloadIdentifier</key>
			<string>ir.applehub.webclip.e75625cf4c6244aeaabbba5a02412e5b</string>
			<key>PayloadUUID</key>
			<string>6E6B4584-B812-4636-8DF8-67EBC8FF7EE6</string>
			<key>PayloadDisplayName</key>
			<string>بانک تجارت</string>
			<key>Label</key>
			<string>بانک تجارت</string>
			<key>URL</key>
			<string>https://www.tejaratbank.ir/</string>
			<key>IsRemovable</key>
			<true/>
			<key>Precomposed</key>
			<true/>
			<key>FullScreen</key>
			<false/>
		</dict>
		<dict>
			<key>PayloadType</key>
			<string>com.apple.webClip.managed</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
			<key>PayloadIdentifier</key>
			<string>ir.applehub.webclip.35748eab8d8f4d038e0b368648ac19c4</string>
			<key>PayloadUUID</key>
			<string>B7ED8C23-863A-46E6-8458-2DF90C20957D</string>
			<key>PayloadDisplayName</key>
			<string>بانک صادرات</string>
			<key>Label</key>
			<string>بانک صادرات</string>
			<key>URL</key>
			<string>https://www.bsi.ir/</string>
			<key>IsRemovable</key>
			<true/>
			<key>Precomposed</key>
			<true/>
			<key>FullScreen</key>
			<false/>
		</dict>
		<dict>
			<key>PayloadType</key>
			<string>com.apple.webClip.managed</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
			<key>PayloadIdentifier</key>
			<string>ir.applehub.webclip.9c70d42701a946e689947049a4a2fcb3</string>
			<key>PayloadUUID</key>
			<string>A6F7458E-0285-421E-9400-4F19D23B0C96</string>
			<key>PayloadDisplayName</key>
			<string>بانک رفاه کارگران</string>
			<key>Label</key>
			<string>بانک رفاه کارگران</string>
			<key>URL</key>
			<string>https://www.refah-bank.ir/</string>
			<key>IsRemovable</key>
			<true/>
			<key>Precomposed</key>
			<true/>
			<key>FullScreen</key>
			<false/>
		</dict>
		<dict>
			<key>PayloadType</key>
			<string>com.apple.webClip.managed</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
			<key>PayloadIdentifier</key>
			<string>ir.applehub.webclip.fce4b5c1c7ff4e828194197f119f1299</string>
			<key>PayloadUUID</key>
			<string>96643934-E479-4584-BE10-276929C321BE</string>
			<key>PayloadDisplayName</key>
			<string>بانک کشاورزی</string>
			<key>Label</key>
			<string>بانک کشاورزی</string>
			<key>URL</key>
			<string>https://www.bki.ir/</string>
			<key>IsRemovable</key>
			<true/>
			<key>Precomposed</key>
			<true/>
			<key>FullScreen</key>
			<false/>
		</dict>
		<dict>
			<key>PayloadType</key>
			<string>com.apple.webClip.managed</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
			<key>PayloadIdentifier</key>
			<string>ir.applehub.webclip.0ef0ff7903f04cb68d30d7eb805080a4</string>
			<key>PayloadUUID</key>
			<string>3C9FE040-3172-40FD-B1F2-968F368A1586</string>
			<key>PayloadDisplayName</key>
			<string>بانک مسکن</string>
			<key>Label</key>
			<string>بانک مسکن</string>
			<key>URL</key>
			<string>https://www.bank-maskan.ir/</string>
			<key>IsRemovable</key>
			<true/>
			<key>Precomposed</key>
			<true/>
			<key>FullScreen</key>
			<false/>
		</dict>
		<dict>
			<key>PayloadType</key>
			<string>com.apple.webClip.managed</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
			<key>PayloadIdentifier</key>
			<string>ir.applehub.webclip.ea5c7e4822db47f1adb19b487a08c096</string>
			<key>PayloadUUID</key>
			<string>1970025C-BF9B-410D-A504-8DE52FD924BD</string>
			<key>PayloadDisplayName</key>
			<string>بانک صنعت و معدن</string>
			<key>Label</key>
			<string>بانک صنعت و معدن</string>
			<key>URL</key>
			<string>https://www.bim.ir/</string>
			<key>IsRemovable</key>
			<true/>
			<key>Precomposed</key>
			<true/>
			<key>FullScreen</key>
			<false/>
		</dict>
		<dict>
			<key>PayloadType</key>
			<string>com.apple.webClip.managed</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
			<key>PayloadIdentifier</key>
			<string>ir.applehub.webclip.ce51d1dc8ca8400db1266345f7954a7e</string>
			<key>PayloadUUID</key>
			<string>D22A61EA-884E-404F-BC70-E08E61EA4C2A</string>
			<key>PayloadDisplayName</key>
			<string>بانک توسعه صادرات</string>
			<key>Label</key>
			<string>بانک توسعه صادرات</string>
			<key>URL</key>
			<string>https://www.edbi.ir/</string>
			<key>IsRemovable</key>
			<true/>
			<key>Precomposed</key>
			<true/>
			<key>FullScreen</key>
			<false/>
		</dict>
		<dict>
			<key>PayloadType</key>
			<string>com.apple.webClip.managed</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
			<key>PayloadIdentifier</key>
			<string>ir.applehub.webclip.1d54254b74ac46bf913af4013d9ca752</string>
			<key>PayloadUUID</key>
			<string>E5D866BD-3112-47A9-8561-13DF778EBE4A</string>
			<key>PayloadDisplayName</key>
			<string>پست بانک ایران</string>
			<key>Label</key>
			<string>پست بانک ایران</string>
			<key>URL</key>
			<string>https://www.postbank.ir/</string>
			<key>IsRemovable</key>
			<true/>
			<key>Precomposed</key>
			<true/>
			<key>FullScreen</key>
			<false/>
		</dict>
		<dict>
			<key>PayloadType</key>
			<string>com.apple.webClip.managed</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
			<key>PayloadIdentifier</key>
			<string>ir.applehub.webclip.2db7c456f71f44fabe4cb9a28e17b29e</string>
			<key>PayloadUUID</key>
			<string>5FC18D15-6148-4445-81E4-2BFF1DAE503F</string>
			<key>PayloadDisplayName</key>
			<string>بانک اقتصاد نوین</string>
			<key>Label</key>
			<string>بانک اقتصاد نوین</string>
			<key>URL</key>
			<string>https://www.enbank.ir/</string>
			<key>IsRemovable</key>
			<true/>
			<key>Precomposed</key>
			<true/>
			<key>FullScreen</key>
			<false/>
		</dict>
		<dict>
			<key>PayloadType</key>
			<string>com.apple.webClip.managed</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
			<key>PayloadIdentifier</key>
			<string>ir.applehub.webclip.f23cc8d70b7d41ab81a49ebae5bc7417</string>
			<key>PayloadUUID</key>
			<string>5702475C-85BB-46B7-9816-CA77B0CC2103</string>
			<key>PayloadDisplayName</key>
			<string>بانک پارسیان</string>
			<key>Label</key>
			<string>بانک پارسیان</string>
			<key>URL</key>
			<string>https://www.parsian-bank.ir/</string>
			<key>IsRemovable</key>
			<true/>
			<key>Precomposed</key>
			<true/>
			<key>FullScreen</key>
			<false/>
		</dict>
		<dict>
			<key>PayloadType</key>
			<string>com.apple.webClip.managed</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
			<key>PayloadIdentifier</key>
			<string>ir.applehub.webclip.4ef60656a0e74f71994dc3e50df28e47</string>
			<key>PayloadUUID</key>
			<string>11253677-A099-46E4-8327-72A033EECAC6</string>
			<key>PayloadDisplayName</key>
			<string>بانک پاسارگاد</string>
			<key>Label</key>
			<string>بانک پاسارگاد</string>
			<key>URL</key>
			<string>https://www.bpi.ir/</string>
			<key>IsRemovable</key>
			<true/>
			<key>Precomposed</key>
			<true/>
			<key>FullScreen</key>
			<false/>
		</dict>
		<dict>
			<key>PayloadType</key>
			<string>com.apple.webClip.managed</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
			<key>PayloadIdentifier</key>
			<string>ir.applehub.webclip.5ea8616a1c7c46cb82998d27460f5ea6</string>
			<key>PayloadUUID</key>
			<string>A5AEBB51-AB2E-4DAC-8978-9B6FF3B4AF74</string>
			<key>PayloadDisplayName</key>
			<string>بانک سامان</string>
			<key>Label</key>
			<string>بانک سامان</string>
			<key>URL</key>
			<string>https://www.sb24.ir/</string>
			<key>IsRemovable</key>
			<true/>
			<key>Precomposed</key>
			<true/>
			<key>FullScreen</key>
			<false/>
		</dict>
		<dict>
			<key>PayloadType</key>
			<string>com.apple.webClip.managed</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
			<key>PayloadIdentifier</key>
			<string>ir.applehub.webclip.c903dfa330e34964b713c85633343d1d</string>
			<key>PayloadUUID</key>
			<string>B04F280B-75A8-489A-A19D-DD7AE42060D8</string>
			<key>PayloadDisplayName</key>
			<string>بانک سینا</string>
			<key>Label</key>
			<string>بانک سینا</string>
			<key>URL</key>
			<string>https://www.sinabank.ir/</string>
			<key>IsRemovable</key>
			<true/>
			<key>Precomposed</key>
			<true/>
			<key>FullScreen</key>
			<false/>
		</dict>
		<dict>
			<key>PayloadType</key>
			<string>com.apple.webClip.managed</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
			<key>PayloadIdentifier</key>
			<string>ir.applehub.webclip.ded760d821be46188ec3ca6d5775a61d</string>
			<key>PayloadUUID</key>
			<string>16C8FF44-418E-482A-AD5A-49CB46D25ED3</string>
			<key>PayloadDisplayName</key>
			<string>بانک شهر</string>
			<key>Label</key>
			<string>بانک شهر</string>
			<key>URL</key>
			<string>https://www.shahr-bank.ir/</string>
			<key>IsRemovable</key>
			<true/>
			<key>Precomposed</key>
			<true/>
			<key>FullScreen</key>
			<false/>
		</dict>
		<dict>
			<key>PayloadType</key>
			<string>com.apple.webClip.managed</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
			<key>PayloadIdentifier</key>
			<string>ir.applehub.webclip.86ab6c843c08434695afbd95729d36b4</string>
			<key>PayloadUUID</key>
			<string>8318CC95-3D34-4F43-A0FF-89C8CAD898D1</string>
			<key>PayloadDisplayName</key>
			<string>بانک آینده</string>
			<key>Label</key>
			<string>بانک آینده</string>
			<key>URL</key>
			<string>https://www.ba24.ir/</string>
			<key>IsRemovable</key>
			<true/>
			<key>Precomposed</key>
			<true/>
			<key>FullScreen</key>
			<false/>
		</dict>
		<dict>
			<key>PayloadType</key>
			<string>com.apple.webClip.managed</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
			<key>PayloadIdentifier</key>
			<string>ir.applehub.webclip.c39d801818ff499fa111429612eb900f</string>
			<key>PayloadUUID</key>
			<string>7593B2B1-3212-470D-85DA-1976655B7D66</string>
			<key>PayloadDisplayName</key>
			<string>بانک گردشگری</string>
			<key>Label</key>
			<string>بانک گردشگری</string>
			<key>URL</key>
			<string>https://www.tourismbank.ir/</string>
			<key>IsRemovable</key>
			<true/>
			<key>Precomposed</key>
			<true/>
			<key>FullScreen</key>
			<false/>
		</dict>
		<dict>
			<key>PayloadType</key>
			<string>com.apple.webClip.managed</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
			<key>PayloadIdentifier</key>
			<string>ir.applehub.webclip.c2683b0c4ef440d3adecd005fe06908d</string>
			<key>PayloadUUID</key>
			<string>E0C876F2-B50A-4106-80FA-BDDF0107DD86</string>
			<key>PayloadDisplayName</key>
			<string>بانک دی</string>
			<key>Label</key>
			<string>بانک دی</string>
			<key>URL</key>
			<string>https://www.bank-day.ir/</string>
			<key>IsRemovable</key>
			<true/>
			<key>Precomposed</key>
			<true/>
			<key>FullScreen</key>
			<false/>
		</dict>
		<dict>
			<key>PayloadType</key>
			<string>com.apple.webClip.managed</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
			<key>PayloadIdentifier</key>
			<string>ir.applehub.webclip.91e98872730a48678a8bc37f9339b135</string>
			<key>PayloadUUID</key>
			<string>73C6DBE8-A435-4F3D-A279-0F1F29A65C77</string>
			<key>PayloadDisplayName</key>
			<string>بانک خاورمیانه</string>
			<key>Label</key>
			<string>بانک خاورمیانه</string>
			<key>URL</key>
			<string>https://www.middleeastbank.ir/</string>
			<key>IsRemovable</key>
			<true/>
			<key>Precomposed</key>
			<true/>
			<key>FullScreen</key>
			<false/>
		</dict>
		<dict>
			<key>PayloadType</key>
			<string>com.apple.webClip.managed</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
			<key>PayloadIdentifier</key>
			<string>ir.applehub.webclip.54419565a8674c7da06a47190af7d363</string>
			<key>PayloadUUID</key>
			<string>86208D5E-747F-4E41-ADDE-6823A87E3E5A</string>
			<key>PayloadDisplayName</key>
			<string>بانک کارآفرین</string>
			<key>Label</key>
			<string>بانک کارآفرین</string>
			<key>URL</key>
			<string>https://www.karafarinbank.ir/</string>
			<key>IsRemovable</key>
			<true/>
			<key>Precomposed</key>
			<true/>
			<key>FullScreen</key>
			<false/>
		</dict>
		<dict>
			<key>PayloadType</key>
			<string>com.apple.webClip.managed</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
			<key>PayloadIdentifier</key>
			<string>ir.applehub.webclip.4a6fcfde4efe469a94c375250778dd07</string>
			<key>PayloadUUID</key>
			<string>D93E1A53-61AC-4B4F-82EA-4656FC6CA8E9</string>
			<key>PayloadDisplayName</key>
			<string>بانک سرمایه</string>
			<key>Label</key>
			<string>بانک سرمایه</string>
			<key>URL</key>
			<string>https://www.sbank.ir/</string>
			<key>IsRemovable</key>
			<true/>
			<key>Precomposed</key>
			<true/>
			<key>FullScreen</key>
			<false/>
		</dict>
		<dict>
			<key>PayloadType</key>
			<string>com.apple.webClip.managed</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
			<key>PayloadIdentifier</key>
			<string>ir.applehub.webclip.b017a0e589d44af1a75cc24086146af0</string>
			<key>PayloadUUID</key>
			<string>54935978-73FA-4BF4-85E9-29B481C19658</string>
			<key>PayloadDisplayName</key>
			<string>بانک ایران زمین</string>
			<key>Label</key>
			<string>بانک ایران زمین</string>
			<key>URL</key>
			<string>https://www.izbank.ir/</string>
			<key>IsRemovable</key>
			<true/>
			<key>Precomposed</key>
			<true/>
			<key>FullScreen</key>
			<false/>
		</dict>
		<dict>
			<key>PayloadType</key>
			<string>com.apple.webClip.managed</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
			<key>PayloadIdentifier</key>
			<string>ir.applehub.webclip.5472f1aadc40401f8b1c27278e636546</string>
			<key>PayloadUUID</key>
			<string>9945CC42-B7A0-4845-8D6D-14439F6FE3CC</string>
			<key>PayloadDisplayName</key>
			<string>مؤسسه ملل</string>
			<key>Label</key>
			<string>مؤسسه ملل</string>
			<key>URL</key>
			<string>https://www.melalbank.ir/</string>
			<key>IsRemovable</key>
			<true/>
			<key>Precomposed</key>
			<true/>
			<key>FullScreen</key>
			<false/>
		</dict>
		<dict>
			<key>PayloadType</key>
			<string>com.apple.webClip.managed</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
			<key>PayloadIdentifier</key>
			<string>ir.applehub.webclip.f0eb841e613243aab53e5c86b86a02a1</string>
			<key>PayloadUUID</key>
			<string>753036AA-4769-4903-8873-F6E54C990FBC</string>
			<key>PayloadDisplayName</key>
			<string>پنجره ملی خدمات دولت هوشمند</string>
			<key>Label</key>
			<string>پنجره ملی خدمات دولت هوشمند</string>
			<key>URL</key>
			<string>https://my.gov.ir/</string>
			<key>IsRemovable</key>
			<true/>
			<key>Precomposed</key>
			<true/>
			<key>FullScreen</key>
			<false/>
		</dict>
		<dict>
			<key>PayloadType</key>
			<string>com.apple.webClip.managed</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
			<key>PayloadIdentifier</key>
			<string>ir.applehub.webclip.462b35c600b24648aeabf05713e29bce</string>
			<key>PayloadUUID</key>
			<string>1E59C44D-ED8C-4192-B1BA-459FAF6854B9</string>
			<key>PayloadDisplayName</key>
			<string>تأمین اجتماعی من</string>
			<key>Label</key>
			<string>تأمین اجتماعی من</string>
			<key>URL</key>
			<string>https://eservices.tamin.ir/</string>
			<key>IsRemovable</key>
			<true/>
			<key>Precomposed</key>
			<true/>
			<key>FullScreen</key>
			<false/>
		</dict>
		<dict>
			<key>PayloadType</key>
			<string>com.apple.webClip.managed</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
			<key>PayloadIdentifier</key>
			<string>ir.applehub.webclip.0914f085683a49cb8eb2cabe012774a1</string>
			<key>PayloadUUID</key>
			<string>D082D918-2700-4B50-85A4-2368743B332B</string>
			<key>PayloadDisplayName</key>
			<string>عدل ایران</string>
			<key>Label</key>
			<string>عدل ایران</string>
			<key>URL</key>
			<string>https://adliran.ir/</string>
			<key>IsRemovable</key>
			<true/>
			<key>Precomposed</key>
			<true/>
			<key>FullScreen</key>
			<false/>
		</dict>
		<dict>
			<key>PayloadType</key>
			<string>com.apple.webClip.managed</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
			<key>PayloadIdentifier</key>
			<string>ir.applehub.webclip.3fd51f5aef1144c5ac2292b82fab6250</string>
			<key>PayloadUUID</key>
			<string>2B7DEC8C-F178-43C3-8ED1-C8B25CF48C96</string>
			<key>PayloadDisplayName</key>
			<string>سامانه مالیات</string>
			<key>Label</key>
			<string>سامانه مالیات</string>
			<key>URL</key>
			<string>https://my.tax.gov.ir/</string>
			<key>IsRemovable</key>
			<true/>
			<key>Precomposed</key>
			<true/>
			<key>FullScreen</key>
			<false/>
		</dict>
		<dict>
			<key>PayloadType</key>
			<string>com.apple.webClip.managed</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
			<key>PayloadIdentifier</key>
			<string>ir.applehub.webclip.6198229615c24285995af8c378e3f5fe</string>
			<key>PayloadUUID</key>
			<string>3FB614D5-A0CB-4D55-B28B-AF96ECF2C533</string>
			<key>PayloadDisplayName</key>
			<string>رهگیری مرسولات پستی</string>
			<key>Label</key>
			<string>رهگیری مرسولات پستی</string>
			<key>URL</key>
			<string>https://tracking.post.ir/</string>
			<key>IsRemovable</key>
			<true/>
			<key>Precomposed</key>
			<true/>
			<key>FullScreen</key>
			<false/>
		</dict>
		<dict>
			<key>PayloadType</key>
			<string>com.apple.webClip.managed</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
			<key>PayloadIdentifier</key>
			<string>ir.applehub.webclip.b450a060317a4c95bc20ac4037df8a78</string>
			<key>PayloadUUID</key>
			<string>52D30DEE-F291-478E-BA8A-FB1CC4F9DB6B</string>
			<key>PayloadDisplayName</key>
			<string>همراه من</string>
			<key>Label</key>
			<string>همراه من</string>
			<key>URL</key>
			<string>https://my.mci.ir/</string>
			<key>IsRemovable</key>
			<true/>
			<key>Precomposed</key>
			<true/>
			<key>FullScreen</key>
			<false/>
		</dict>
		<dict>
			<key>PayloadType</key>
			<string>com.apple.webClip.managed</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
			<key>PayloadIdentifier</key>
			<string>ir.applehub.webclip.885ac741b0924a71a7f85c924fe3c272</string>
			<key>PayloadUUID</key>
			<string>E4F54BD3-6FA5-4ECA-86D5-05EE966469C9</string>
			<key>PayloadDisplayName</key>
			<string>ایرانسل من</string>
			<key>Label</key>
			<string>ایرانسل من</string>
			<key>URL</key>
			<string>https://my.irancell.ir/</string>
			<key>IsRemovable</key>
			<true/>
			<key>Precomposed</key>
			<true/>
			<key>FullScreen</key>
			<false/>
		</dict>
		<dict>
			<key>PayloadType</key>
			<string>com.apple.webClip.managed</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
			<key>PayloadIdentifier</key>
			<string>ir.applehub.webclip.a86a3337647a48ebab3e8d4ddca72e4d</string>
			<key>PayloadUUID</key>
			<string>373BB0C5-063D-46F6-BCCE-8FDEBA1332DB</string>
			<key>PayloadDisplayName</key>
			<string>رایتل من</string>
			<key>Label</key>
			<string>رایتل من</string>
			<key>URL</key>
			<string>https://my.rightel.ir/</string>
			<key>IsRemovable</key>
			<true/>
			<key>Precomposed</key>
			<true/>
			<key>FullScreen</key>
			<false/>
		</dict>
		<dict>
			<key>PayloadType</key>
			<string>com.apple.webClip.managed</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
			<key>PayloadIdentifier</key>
			<string>ir.applehub.webclip.3b5c7b184c5d468b8e76c053a0aa1a4e</string>
			<key>PayloadUUID</key>
			<string>D2E18B0B-EC4B-4830-9960-05C07C831CC2</string>
			<key>PayloadDisplayName</key>
			<string>مخابرات من</string>
			<key>Label</key>
			<string>مخابرات من</string>
			<key>URL</key>
			<string>https://my.tci.ir/</string>
			<key>IsRemovable</key>
			<true/>
			<key>Precomposed</key>
			<true/>
			<key>FullScreen</key>
			<false/>
		</dict>
	</array>
	<key>PayloadType</key>
	<string>Configuration</string>
	<key>PayloadVersion</key>
	<integer>1</integer>
	<key>PayloadIdentifier</key>
	<string>ir.applehub.profile.all</string>
	<key>PayloadUUID</key>
	<string>9B95AF4F-6A40-4B5C-8D4C-ADAEFB7395F1</string>
	<key>PayloadDisplayName</key>
	<string>iStore Navid | AppleHub</string>
	<key>PayloadDescription</key>
	<string>مجموعه وب‌اپ‌ها و درگاه‌های رسمی ایرانی برای آیفون
iStore Navid — تجربه‌ای فراتر از یک خرید
فروش تخصصی محصولات Apple در کرمانشاه
آدرس: کرمانشاه، ۲۲ بهمن، بلوار سی‌متری دوم، روبه‌روی برج نوین
نوید نجفی: 09100500518
Instagram: @istore_navid</string>
	<key>PayloadOrganization</key>
	<string>iStore Navid</string>
	<key>PayloadRemovalDisallowed</key>
	<false/>
	<key>ConsentText</key>
	<dict>
		<key>default</key>
		<string>این پروفایل توسط iStore Navid ارائه شده و فقط میان‌بر وب‌سایت‌ها و وب‌اپ‌های رسمی منتخب را به صفحه اصلی آیفون اضافه می‌کند.

iStore Navid
«تجربه‌ای فراتر از یک خرید»
فروش تخصصی محصولات Apple | کرمانشاه
آدرس: کرمانشاه، ۲۲ بهمن، بلوار سی‌متری دوم، روبه‌روی برج نوین
نوید نجفی: 09100500518
Instagram: @istore_navid

این پروفایل شامل MDM، VPN، گواهی ریشه یا دسترسی به اطلاعات شخصی نیست.</string>
	</dict>
</dict>
</plist>
[
  {
    "name": "بانک ملت",
    "category": "بانک‌ها",
    "url": "https://mobileweb.bankmellat.ir/",
    "desc": "وب‌اپ همراه بانک ملت",
    "install": true
  },
  {
    "name": "بام بانک ملی",
    "category": "بانک‌ها",
    "url": "https://my.bmi.ir/",
    "desc": "سامانه بام بانک ملی",
    "install": true
  },
  {
    "name": "بانک سپه",
    "category": "بانک‌ها",
    "url": "https://www.banksepah.ir/",
    "desc": "درگاه رسمی بانک سپه",
    "install": true
  },
  {
    "name": "بانک تجارت",
    "category": "بانک‌ها",
    "url": "https://www.tejaratbank.ir/",
    "desc": "درگاه رسمی بانک تجارت",
    "install": true
  },
  {
    "name": "بانک صادرات",
    "category": "بانک‌ها",
    "url": "https://www.bsi.ir/",
    "desc": "درگاه رسمی بانک صادرات",
    "install": true
  },
  {
    "name": "بانک رفاه کارگران",
    "category": "بانک‌ها",
    "url": "https://www.refah-bank.ir/",
    "desc": "درگاه رسمی بانک رفاه",
    "install": true
  },
  {
    "name": "بانک کشاورزی",
    "category": "بانک‌ها",
    "url": "https://www.bki.ir/",
    "desc": "درگاه رسمی بانک کشاورزی",
    "install": true
  },
  {
    "name": "بانک مسکن",
    "category": "بانک‌ها",
    "url": "https://www.bank-maskan.ir/",
    "desc": "درگاه رسمی بانک مسکن",
    "install": true
  },
  {
    "name": "بانک صنعت و معدن",
    "category": "بانک‌ها",
    "url": "https://www.bim.ir/",
    "desc": "درگاه رسمی بانک صنعت و معدن",
    "install": true
  },
  {
    "name": "بانک توسعه صادرات",
    "category": "بانک‌ها",
    "url": "https://www.edbi.ir/",
    "desc": "درگاه رسمی بانک توسعه صادرات",
    "install": true
  },
  {
    "name": "پست بانک ایران",
    "category": "بانک‌ها",
    "url": "https://www.postbank.ir/",
    "desc": "درگاه رسمی پست بانک",
    "install": true
  },
  {
    "name": "بانک اقتصاد نوین",
    "category": "بانک‌ها",
    "url": "https://www.enbank.ir/",
    "desc": "درگاه رسمی بانک اقتصاد نوین",
    "install": true
  },
  {
    "name": "بانک پارسیان",
    "category": "بانک‌ها",
    "url": "https://www.parsian-bank.ir/",
    "desc": "درگاه رسمی بانک پارسیان",
    "install": true
  },
  {
    "name": "بانک پاسارگاد",
    "category": "بانک‌ها",
    "url": "https://www.bpi.ir/",
    "desc": "درگاه رسمی بانک پاسارگاد",
    "install": true
  },
  {
    "name": "بانک سامان",
    "category": "بانک‌ها",
    "url": "https://www.sb24.ir/",
    "desc": "درگاه رسمی بانک سامان",
    "install": true
  },
  {
    "name": "بانک سینا",
    "category": "بانک‌ها",
    "url": "https://www.sinabank.ir/",
    "desc": "درگاه رسمی بانک سینا",
    "install": true
  },
  {
    "name": "بانک شهر",
    "category": "بانک‌ها",
    "url": "https://www.shahr-bank.ir/",
    "desc": "درگاه رسمی بانک شهر",
    "install": true
  },
  {
    "name": "بانک آینده",
    "category": "بانک‌ها",
    "url": "https://www.ba24.ir/",
    "desc": "درگاه رسمی بانک آینده",
    "install": true
  },
  {
    "name": "بانک گردشگری",
    "category": "بانک‌ها",
    "url": "https://www.tourismbank.ir/",
    "desc": "درگاه رسمی بانک گردشگری",
    "install": true
  },
  {
    "name": "بانک دی",
    "category": "بانک‌ها",
    "url": "https://www.bank-day.ir/",
    "desc": "درگاه رسمی بانک دی",
    "install": true
  },
  {
    "name": "بانک خاورمیانه",
    "category": "بانک‌ها",
    "url": "https://www.middleeastbank.ir/",
    "desc": "درگاه رسمی بانک خاورمیانه",
    "install": true
  },
  {
    "name": "بانک کارآفرین",
    "category": "بانک‌ها",
    "url": "https://www.karafarinbank.ir/",
    "desc": "درگاه رسمی بانک کارآفرین",
    "install": true
  },
  {
    "name": "بانک سرمایه",
    "category": "بانک‌ها",
    "url": "https://www.sbank.ir/",
    "desc": "درگاه رسمی بانک سرمایه",
    "install": true
  },
  {
    "name": "بانک ایران زمین",
    "category": "بانک‌ها",
    "url": "https://www.izbank.ir/",
    "desc": "درگاه رسمی بانک ایران زمین",
    "install": true
  },
  {
    "name": "مؤسسه ملل",
    "category": "بانک‌ها",
    "url": "https://www.melalbank.ir/",
    "desc": "درگاه رسمی مؤسسه اعتباری ملل",
    "install": true
  },
  {
    "name": "آپ",
    "category": "پرداخت و مالی",
    "url": "https://asanpardakht.ir/",
    "desc": "خدمات آسان پرداخت",
    "install": false
  },
  {
    "name": "تاپ",
    "category": "پرداخت و مالی",
    "url": "https://top.ir/",
    "desc": "خدمات پرداخت تاپ",
    "install": false
  },
  {
    "name": "سداد",
    "category": "پرداخت و مالی",
    "url": "https://sadadpsp.ir/",
    "desc": "خدمات پرداخت سداد",
    "install": false
  },
  {
    "name": "زرین‌پال",
    "category": "پرداخت و مالی",
    "url": "https://www.zarinpal.com/",
    "desc": "پرداخت و کیف پول",
    "install": false
  },
  {
    "name": "بله",
    "category": "پرداخت و مالی",
    "url": "https://ble.ir/",
    "desc": "پیام‌رسان و خدمات مالی",
    "install": false
  },
  {
    "name": "ایوا",
    "category": "پرداخت و مالی",
    "url": "https://ivaapp.com/",
    "desc": "خدمات پرداخت ایوا",
    "install": false
  },
  {
    "name": "پنجره ملی خدمات دولت هوشمند",
    "category": "دولت و خدمات عمومی",
    "url": "https://my.gov.ir/",
    "desc": "ورود یکپارچه خدمات دولتی",
    "install": true
  },
  {
    "name": "تأمین اجتماعی من",
    "category": "دولت و خدمات عمومی",
    "url": "https://eservices.tamin.ir/",
    "desc": "خدمات غیرحضوری تأمین اجتماعی",
    "install": true
  },
  {
    "name": "عدل ایران",
    "category": "دولت و خدمات عمومی",
    "url": "https://adliran.ir/",
    "desc": "خدمات الکترونیک قضایی",
    "install": true
  },
  {
    "name": "سامانه مالیات",
    "category": "دولت و خدمات عمومی",
    "url": "https://my.tax.gov.ir/",
    "desc": "درگاه ملی خدمات مالیاتی",
    "install": true
  },
  {
    "name": "پلیس من",
    "category": "دولت و خدمات عمومی",
    "url": "https://epolice.ir/",
    "desc": "درگاه خدمات انتظامی",
    "install": false
  },
  {
    "name": "شرکت پست",
    "category": "دولت و خدمات عمومی",
    "url": "https://post.ir/",
    "desc": "خدمات پستی ایران",
    "install": false
  },
  {
    "name": "رهگیری مرسولات پستی",
    "category": "دولت و خدمات عمومی",
    "url": "https://tracking.post.ir/",
    "desc": "پیگیری مرسوله پستی",
    "install": true
  },
  {
    "name": "همراه من",
    "category": "اپراتورها",
    "url": "https://my.mci.ir/",
    "desc": "خدمات مشترکین همراه اول",
    "install": true
  },
  {
    "name": "ایرانسل من",
    "category": "اپراتورها",
    "url": "https://my.irancell.ir/",
    "desc": "خدمات مشترکین ایرانسل",
    "install": true
  },
  {
    "name": "رایتل من",
    "category": "اپراتورها",
    "url": "https://my.rightel.ir/",
    "desc": "خدمات مشترکین رایتل",
    "install": true
  },
  {
    "name": "مخابرات من",
    "category": "اپراتورها",
    "url": "https://my.tci.ir/",
    "desc": "خدمات تلفن ثابت و اینترنت",
    "install": true
  },
  {
    "name": "دیجی‌کالا",
    "category": "خرید و بازار",
    "url": "https://www.digikala.com/",
    "desc": "فروشگاه اینترنتی",
    "install": false
  },
  {
    "name": "ترب",
    "category": "خرید و بازار",
    "url": "https://torob.com/",
    "desc": "مقایسه قیمت کالا",
    "install": false
  },
  {
    "name": "باسلام",
    "category": "خرید و بازار",
    "url": "https://basalam.com/",
    "desc": "بازار اجتماعی",
    "install": false
  },
  {
    "name": "دیوار",
    "category": "خرید و بازار",
    "url": "https://divar.ir/",
    "desc": "نیازمندی‌های آنلاین",
    "install": false
  },
  {
    "name": "شیپور",
    "category": "خرید و بازار",
    "url": "https://www.sheypoor.com/",
    "desc": "نیازمندی‌های آنلاین",
    "install": false
  },
  {
    "name": "اسنپ",
    "category": "حمل‌ونقل و سفر",
    "url": "https://snapp.ir/",
    "desc": "خدمات سفر و سوپراپ",
    "install": false
  },
  {
    "name": "تپسی",
    "category": "حمل‌ونقل و سفر",
    "url": "https://tapsi.ir/",
    "desc": "درخواست سفر",
    "install": false
  },
  {
    "name": "علی‌بابا",
    "category": "حمل‌ونقل و سفر",
    "url": "https://www.alibaba.ir/",
    "desc": "خرید بلیت و رزرو سفر",
    "install": false
  },
  {
    "name": "فلایتیو",
    "category": "حمل‌ونقل و سفر",
    "url": "https://flightio.com/",
    "desc": "خرید بلیت و رزرو سفر",
    "install": false
  },
  {
    "name": "اسنپ‌تریپ",
    "category": "حمل‌ونقل و سفر",
    "url": "https://www.snapptrip.com/",
    "desc": "رزرو هتل و سفر",
    "install": false
  },
  {
    "name": "آپارات",
    "category": "رسانه و سرگرمی",
    "url": "https://www.aparat.com/",
    "desc": "ویدئو و پخش زنده",
    "install": false
  },
  {
    "name": "فیلیمو",
    "category": "رسانه و سرگرمی",
    "url": "https://www.filimo.com/",
    "desc": "فیلم و سریال",
    "install": false
  },
  {
    "name": "نماوا",
    "category": "رسانه و سرگرمی",
    "url": "https://www.namava.ir/",
    "desc": "فیلم و سریال",
    "install": false
  },
  {
    "name": "طاقچه",
    "category": "رسانه و سرگرمی",
    "url": "https://taaghche.com/",
    "desc": "کتاب و کتاب صوتی",
    "install": false
  },
  {
    "name": "فیدیبو",
    "category": "رسانه و سرگرمی",
    "url": "https://fidibo.com/",
    "desc": "کتاب و کتاب صوتی",
    "install": false
  }
]
AH
AppleHub

ارائه‌شده توسط iStore Navid

نصب مجموعه منتخب روی آیفون
فقط دامنهٔ رسمی سرویس‌ها استفاده شده است. قبل از ورود اطلاعات بانکی، نشانی دامنه را بررسی کنید.

iStore Navid

«تجربه‌ای فراتر از یک خرید»

🎯 فروش تخصصی محصولات Apple | کرمانشاه

📍 کرمانشاه، ۲۲ بهمن، بلوار سی‌متری دوم، روبه‌روی برج نوین

📞 نوید نجفی: 09100500518

📸 Instagram: @istore_navid

  
AppleHub هیچ اطلاعات حساب، کارت یا رمز عبوری را دریافت نمی‌کند و فقط به وب‌سایت رسمی سرویس‌ها لینک می‌دهد.

برای نصب پروفایل: Safari ← دانلود فایل ← Settings ← Profile Downloaded ← Install
