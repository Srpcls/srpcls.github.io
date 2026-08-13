document.addEventListener('DOMContentLoaded', function() {
    const pagesData = {
        history: {
            category: 'history',
            tag: 'ประวัติความเป็นมา',
            title: 'ประวัติความเป็นมาของจังหวัดชลบุรี',
            desc: 'จังหวัดชลบุรีเป็นเมืองชายทะเลภาคตะวันออกที่มีประวัติศาสตร์ยาวนาน มีการตั้งถิ่นฐานมาตั้งแต่สมัยทวารวดีและอยุธยา เดิมทีมีเมืองโบราณหลายเมือง เช่น เมืองพยาไท เมืองพระรถ และเมืองศรีพะโล ก่อนจะรวมกันเป็นจังหวัดชลบุรีในปัจจุบัน ซึ่งเป็นศูนย์กลางเศรษฐกิจ การค้า การท่องเที่ยว และอุตสาหกรรมที่สำคัญของประเทศ',
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop'
        },
        bangsaen: {
            category: 'attraction',
            tag: 'สถานที่ท่องเที่ยว',
            title: 'หาดบางแสน',
            desc: 'ชายหาดยอดฮิตใกล้มหาวิทยาลัยบูรพา มีเตียงผ้าใบ ร้านอาหารชายหาด คาเฟ่สวยๆ มากมาย เหมาะแก่การมาพักผ่อน นั่งรับลมทะเล และชมพระอาทิตย์ตกดินในบรรยากาศสบายๆ',
            image: 'images/หาดบางแสน.png'
        },
        sammuk: {
            category: 'attraction',
            tag: 'สถานที่ท่องเที่ยว',
            title: 'เขาสามมุข',
            desc: 'จุดชมวิวที่สามารถมองเห็นโค้งหาดบางแสนได้อย่างสวยงาม มีศาลเจ้าแม่สามมุขอันศักดิ์สิทธิ์ที่ผู้คนนิยมมาสักการะขอพร และเป็นจุดชมพระอาทิตย์ตกที่ขึ้นชื่อของชลบุรี',
            image: 'images/เขาสามมุข.png'
        },
        nongmon: {
            category: 'attraction',
            tag: 'สถานที่ท่องเที่ยว',
            title: 'ตลาดหนองมน',
            desc: 'แหล่งรวมของฝากชื่อดังของชลบุรี ของขึ้นชื่อที่สุดคือ ข้าวหลามหนองมน หอยจ๊อปู และอาหารทะเลแห้งแปรรูปทุกประเภท',
            image: 'images/ตลาดหนองมน.png'
        },
        laemtaen: {
            category: 'attraction',
            tag: 'สถานที่ท่องเที่ยว',
            title: 'แหลมแท่น',
            desc: 'ลานกิจกรรมริมทะเลบรรยากาศดี ลมพัดเย็นสบาย เหมาะสำหรับการเดินเล่น ออกกำลังกาย นั่งชิล หรือชมวิวหาดบางแสนตอนกลางคืน',
            image: 'images/แหลมแท่น.png'
        },
        chakri: {
            category: 'attraction',
            tag: 'สถานที่ท่องเที่ยว',
            title: 'เรือหลวงจักรีนฤเบศร',
            desc: 'เรือบรรทุกเฮลิคอปเตอร์ลำแรกและลำเดียวของกองทัพเรือไทย จอดประจำการอยู่ที่ท่าเรือจุกเสม็ด อ.สัตหีบ เปิดให้ประชาชนทั่วไปเข้าชมความยิ่งใหญ่',
            image: 'images/เรือหลวงจักรีนฤเบศร.png'
        },
        cheechan: {
            category: 'attraction',
            tag: 'สถานที่ท่องเที่ยว',
            title: 'วัดเขาชีจรรย์',
            desc: 'แกะสลักพระพุทธรูปปางมารวิชัยด้วยแสงเลเซอร์บนหน้าผาหินแกะสลักขนาดใหญ่ที่สุดในโลก ตั้งโดดเด่นกลางธรรมชาติสวยงาม',
            image: 'images/วัดเขาชีจรรย์.png'
        },
        floatingmarket: {
            category: 'attraction',
            tag: 'สถานที่ท่องเที่ยว',
            title: 'ตลาดน้ำ 4 ภาค พัทยา',
            desc: 'สถานที่ท่องเที่ยวเชิงวัฒนธรรมที่จำลองวิถีชีวิตความเป็นอยู่และวัฒนธรรมของคนไทยทั้ง 4 ภาค มีสินค้า อาหาร และการแสดงพื้นบ้านให้ชม',
            image: 'images/ตลาดน้ำ 4 ภาค.png'
        },
        jomtien: {
            category: 'attraction',
            tag: 'สถานที่ท่องเที่ยว',
            title: 'หาดจอมเทียน',
            desc: 'ชายหาดยาวสวยงามบรรยากาศสงบกว่าหาดพัทยา มีกิจกรรมทางน้ำมากมาย เช่น เจ็ตสกี วินด์เซิร์ฟ บานาน่าโบ๊ท และมีร้านอาหารทะเลเรียงราย',
            image: 'images/หาดจอมเทียน.png'
        },
        nongnooch: {
            category: 'attraction',
            tag: 'สถานที่ท่องเที่ยว',
            title: 'สวนนงนุชพัทยา',
            desc: 'สวนพฤกษศาสตร์ระดับโลก รวบรวมพันธุ์ไม้นานาชนิด สวนหิน สวนฝรั่งเศส หุบเขาไดโนเสาร์ และการแสดงวัฒนธรรมไทยที่ยิ่งใหญ่',
            image: 'images/สวนนงนุชพัทยา.png'
        },
        sichang: {
            category: 'attraction',
            tag: 'สถานที่ท่องเที่ยว',
            title: 'เกาะสีชัง',
            desc: 'เกาะประวัติศาสตร์ที่มีบรรยากาศเงียบสงบ เหมาะแก่การพักผ่อน มีพระจุฑาธุชราชฐาน ช่องเขาขาด และสะพานอัษฎางค์อันเป็นเอกลักษณ์',
            image: 'images/เกาะสีชัง.png'
        },
        pacificpark: {
            category: 'hotel',
            tag: 'สถานที่พัก',
            title: 'โรงแรมแปซิฟิค พาร์ค',
            desc: 'โรงแรมหรูใกล้นครศรีราชา เดินทางสะดวก มีสิ่งอำนวยความสะดวกครบครัน สระว่ายน้ำ ฟิตเนส และห้องพักกว้างขวางสบาย',
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop'
        },
        thebed: {
            category: 'hotel',
            tag: 'สถานที่พัก',
            title: 'เดอะเบด บาย บุญจิรา',
            desc: 'ที่พักสไตล์โมเดิร์น บรรยากาศอบอุ่น ราคามิตรภาพ เหมาะสำหรับการเดินทางมาพักผ่อนหรือติดต่องานในชลบุรี',
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop'
        },
        poresva: {
            category: 'hotel',
            tag: 'สถานที่พัก',
            title: 'โรงแรมโพเรสวา',
            desc: 'โรงแรมสไตล์รีสอร์ท ร่มรื่นด้วยธรรมชาติและการตกแต่งแบบทันสมัย พร้อมบริการที่เป็นมิตรและห้องพักสะอาด',
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop'
        },
        seabreeze: {
            category: 'hotel',
            tag: 'สถานที่พัก',
            title: 'ซีบรีส บางแสน',
            desc: 'ที่พักใกล้หาดบางแสน เดินเพียงไม่กี่ก้าวก็ถึงทะเล บรรยากาศเงียบสงบ เหมาะสำหรับคู่รักและครอบครัว',
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop'
        },
        zackthenap: {
            category: 'hotel',
            tag: 'สถานที่พัก',
            title: 'แซ็ค เดอะ แนป',
            desc: 'ที่พักดีไซน์เก๋ ตกแต่งทันสมัย เน้นความสะอาด สะดวกสบาย ใกล้แหล่งท่องเที่ยวและร้านอาหารยอดนิยม',
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop'
        },
        gohotel: {
            category: 'hotel',
            tag: 'สถานที่พัก',
            title: 'โก โฮเทล ชลบุรี',
            desc: 'โรงแรมสไตล์มินิมอล ทำเลดีใกล้ศูนย์การค้า เหมาะสำหรับนักท่องเที่ยวและคนทำงานที่ต้องการความสะดวกสบาย',
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop'
        },
        n24: {
            category: 'hotel',
            tag: 'สถานที่พัก',
            title: 'เอ็น24 ชลบุรี',
            desc: 'โรงแรมราคาประหยัด ห้องพักกว้างขวาง สะอาด มีระบบรักษาความปลอดภัย 24 ชั่วโมง',
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop'
        },
        thesila: {
            category: 'hotel',
            tag: 'สถานที่พัก',
            title: 'โรงแรมเดอะ ศิลา',
            desc: 'บูทีคโฮเทลบรรยากาศส่วนตัว การตกแต่งเน้นโทนธรรมชาติ ผ่อนคลาย เหมาะสำหรับการพักผ่อนอย่างแท้จริง',
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop'
        },
        sriracha: {
            category: 'hotel',
            tag: 'สถานที่พัก',
            title: 'เดอะ ศรีราชา เรสซิเดนซ์',
            desc: 'เซอร์วิสอพาร์ทเมนท์หรูหราพร้อมวิวทะเลศรีราชา มีห้องครัวและสิ่งอำนวยความสะดวกสำหรับการพักอาศัยระยะยาว',
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop'
        },
        primetime: {
            category: 'hotel',
            tag: 'สถานที่พัก',
            title: 'Prime Time Hotel Bang Saen',
            desc: 'โรงแรมสไตล์โมเดิร์นใจกลางบางแสน ใกล้หาดและร้านอาหาร มีการบริการระดับพรีเมียม',
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop'
        },
        kholam: {
            category: 'otop',
            tag: 'สินค้า OTOP',
            title: 'ข้าวหลามหนองมน',
            desc: 'ของฝากเลื่องชื่อ รสชาติหวานมัน หอมกลิ่นกระบอกไม้ไผ่ มีหลากหลายไส้ ทั้งถั่วดำ เผือก และกะทิสดเข้มข้น',
            image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop'
        },
        hoijor: {
            category: 'otop',
            tag: 'สินค้า OTOP',
            title: 'หอยจ๊อปู',
            desc: 'หอยจ๊อปูสอดไส้เนื้อปูแน่นๆ ทอดกรอบนอกนุ่มใน น้ำจิ้มบ๊วยรสเด็ด ของดีเมืองชลบุรีที่ต้องลอง',
            image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop'
        },
        krok: {
            category: 'otop',
            tag: 'สินค้า OTOP',
            title: 'ครกหินอ่างศิลา',
            desc: 'งานหัตถกรรมจากหินแกรนิตธรรมชาติที่มีความทนทาน เป็นเอกลักษณ์เฉพาะของตำบลอ่างศิลา',
            image: 'https://images.unsplash.com/photo-1580977276076-ac4cbddb4b5e?q=80&w=1200&auto=format&fit=crop'
        },
        puek: {
            category: 'otop',
            tag: 'สินค้า OTOP',
            title: 'ผ้าทอบ้านปึก',
            desc: 'ผ้าทอพื้นเมืองที่มีลวดลายเป็นเอกลักษณ์ ถักทอด้วยความประณีต ซึมซับภูมิปัญญาท้องถิ่นของชาวบ้านปึก',
            image: 'https://images.unsplash.com/photo-1580977276076-ac4cbddb4b5e?q=80&w=1200&auto=format&fit=crop'
        },
        teakship: {
            category: 'otop',
            tag: 'สินค้า OTOP',
            title: 'เรือจำลองไม้สักทอง',
            desc: 'งานประดิษฐ์เรือจำลองประณีตจากไม้สักทอง ทรงคุณค่า เหมาะสำหรับเป็นของขวัญและของตกแต่งบ้าน',
            image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop'
        },
        namon: {
            category: 'restaurant',
            tag: 'ร้านอาหาร',
            title: 'ก๋วยเตี๋ยวหน้ามน',
            desc: 'ร้านก๋วยเตี๋ยวชื่อดังบางแสน บรรยากาศร่มรื่น ตกแต่งสไตล์คาเฟ่ เมนูเด็ดก๋วยเตี๋ยวต้มยำโบราณ และลูกชิ้นปู',
            image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop'
        },
        piakman: {
            category: 'restaurant',
            tag: 'ร้านอาหาร',
            title: 'เปี๊ยกมันทะเล',
            desc: 'ร้านอาหารทะเลสดใหม่ รสชาติจัดจ้านสไตล์บ้านๆ วัตถุดิบคุณภาพส่งตรงจากสะพานปลาทุกวัน',
            image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop'
        },
        jmien: {
            category: 'restaurant',
            tag: 'ร้านอาหาร',
            title: 'เจ๊เมี้ยน',
            desc: 'ร้านอาหารทะเลดั้งเดิม ปรุงด้วยสูตรเฉพาะตัว เมนูซีฟู้ดผัดฉ่า แกงส้มไข่ปลาเรียวเซียว และต้มยำกุ้งสุดเข้มข้น',
            image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop'
        },
        nachon: {
            category: 'restaurant',
            tag: 'ร้านอาหาร',
            title: 'ร้าน ณ ชล',
            desc: 'ร้านอาหารไทยบรรยากาศอบอุ่น ตกแต่งสวยงาม เสิร์ฟอาหารไทยและอาหารท้องถิ่นชลบุรีรสชาติดั้งเดิม',
            image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop'
        },
        contact: {
            category: 'contact',
            tag: 'ติดต่อเรา',
            title: 'ติดต่อจังหวัดชลบุรี',
            desc: 'ศูนย์ข้อมูลการท่องเที่ยวจังหวัดชลบุรี\nโทรศัพท์: 038-000-000\nอีเมล: info@chonburi.go.th\nเวลาทำการ: จันทร์ - ศุกร์ 08:30 - 16:30 น.',
            image: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1200&auto=format&fit=crop'
        }
    };

    const categoriesData = {
        'category-attraction': { title: 'สถานที่ท่องเที่ยวทั้งหมด', categoryKey: 'attraction' },
        'category-hotel': { title: 'สถานที่พักทั้งหมด', categoryKey: 'hotel' },
        'category-otop': { title: 'สินค้า OTOP ทั้งหมด', categoryKey: 'otop' },
        'category-restaurant': { title: 'ร้านอาหารทั้งหมด', categoryKey: 'restaurant' }
    };

    const homeView = document.getElementById('home-view');
    const categoryView = document.getElementById('category-view');
    const detailView = document.getElementById('detail-view');

    const categoryTitle = document.getElementById('category-title');
    const categoryGrid = document.getElementById('category-grid');

    const detailTag = document.getElementById('detail-tag');
    const detailTitle = document.getElementById('detail-title');
    const detailImage = document.getElementById('detail-image');
    const detailDesc = document.getElementById('detail-desc');
    const btnBackDetail = document.getElementById('btn-back-detail');

    let previousPage = 'home';
    let currentPageKey = 'home';
    let isTransitioning = false;
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        toggle.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });

    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => dropdown.classList.remove('open'));
        }
    });

    function navigateTo(pageKey) {
        if (isTransitioning || pageKey === currentPageKey) return;
        isTransitioning = true;

        dropdowns.forEach(d => d.classList.remove('open'));

        const currentActive = document.querySelector('.page-view.active');
        let targetView = homeView;
        let renderAction = null;

        if (categoriesData[pageKey]) {
            targetView = categoryView;
            previousPage = pageKey;
            renderAction = () => renderCategoryPage(pageKey);
        } else if (pagesData[pageKey]) {
            targetView = detailView;
            renderAction = () => renderDetailPage(pageKey);
        } else if (pageKey === 'home') {
            targetView = homeView;
            previousPage = 'home';
        }

        currentPageKey = pageKey;

        if (currentActive) {
            currentActive.classList.add('fade-out');
            currentActive.classList.remove('active');
        }

        setTimeout(() => {
            document.querySelectorAll('.page-view').forEach(view => {
                view.style.display = 'none';
                view.classList.remove('fade-out', 'active');
            });

            if (renderAction) {
                renderAction();
            }

            targetView.style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'instant' });

            requestAnimationFrame(() => {
                targetView.classList.add('active');
                updateActiveNav(pageKey);
                setTimeout(() => {
                    isTransitioning = false;
                }, 180);
            });
        }, 150);
    }

    function renderCategoryPage(categoryKey) {
        const catInfo = categoriesData[categoryKey];
        categoryTitle.textContent = catInfo.title;
        categoryGrid.innerHTML = '';

        Object.keys(pagesData).forEach(key => {
            const item = pagesData[key];
            if (item.category === catInfo.categoryKey) {
                const card = document.createElement('div');
                card.className = 'card-item';
                card.innerHTML = `
                    <img src="${item.image}" alt="${item.title}">
                    <div class="card-item-body">
                        <h3 class="card-item-title">${item.title}</h3>
                        <p class="card-item-desc">${item.desc}</p>
                        <span class="card-item-link">ดูรายละเอียดเพิ่มเติม &rarr;</span>
                    </div>
                `;
                card.addEventListener('click', function() {
                    navigateTo(key);
                });
                categoryGrid.appendChild(card);
            }
        });
    }

    function renderDetailPage(pageKey) {
        const data = pagesData[pageKey];
        detailTag.textContent = data.tag;
        detailTitle.textContent = data.title;
        detailImage.src = data.image;
        detailImage.alt = data.title;
        detailDesc.textContent = data.desc;
    }

    function updateActiveNav(pageKey) {
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === pageKey) {
                link.classList.add('active');
            }
        });
    }

    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const pageKey = this.getAttribute('data-page');
            if (pageKey) {
                navigateTo(pageKey);
            }
        });
    });

    document.querySelector('.brand').addEventListener('click', function(e) {
        e.preventDefault();
        navigateTo('home');
    });

    btnBackDetail.addEventListener('click', function() {
        navigateTo(previousPage);
    });
});