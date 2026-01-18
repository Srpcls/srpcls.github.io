// จำลองฐานข้อมูล
let alumniList = [
    {id: '620101', fname: 'สมชาย', lname: 'สายลม', faculty: 'วิศวกรรมศาสตร์', major: 'คอมพิวเตอร์', phone: '0811111111', gradDate: '2023-01-01', birthdate:'', email:'', address:''},
    {id: '620102', fname: 'วิภา', lname: 'ใจดี', faculty: 'พยาบาลศาสตร์', major: 'พยาบาล', phone: '0822222222', gradDate: '2023-02-01', birthdate:'', email:'', address:''}
];

let adminList = [
    {username: 'admin', name: 'Super Admin'}
];

let currentRole = 'guest';

window.onload = () => {
    renderAlumni(alumniList);
    renderAdmins();
};

// แก้ไขฟังก์ชันแสดงรายชื่อ (เพื่อให้ชื่อคลิกดูโปรไฟล์ได้)
function renderAlumni(data) {
    const table = document.getElementById('alumniTableBody');
    table.innerHTML = '';
    data.forEach((item, index) => {
        let adminButtons = `<td class="admin-ui ${currentRole === 'admin' ? '' : 'd-none'}">
            <button class="btn btn-sm btn-warning me-1" onclick="editUser(${index})">แก้ไข</button>
            <button class="btn btn-sm btn-danger" onclick="deleteUser(${index})">ลบ</button>
        </td>`;
        
        table.innerHTML += `
            <tr>
                <td>${item.id}</td>
                <td>
                    <a href="javascript:void(0)" class="text-decoration-none fw-bold" style="color: #6f42c1;" onclick="viewProfile(${index})">
                        ${item.fname} ${item.lname}
                    </a>
                </td>
                <td>${item.faculty}</td>
                <td>${item.gradDate ? item.gradDate.split('-')[0] : '-'}</td>
                ${adminButtons}
            </tr>`;
    });
}

// ฟังก์ชันใหม่: สำหรับดูโปรไฟล์ (แสดงข้อมูล 5 อย่างตามโจทย์)
function viewProfile(index) {
    const user = alumniList[index];
    const detailDiv = document.getElementById('profileDetail');
    
    detailDiv.innerHTML = `
        <div class="text-center mb-4">
            <div class="rounded-circle bg-light d-inline-block p-3 mb-2">
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" width="80">
            </div>
            <h4 class="mb-0">${user.fname} ${user.lname}</h4>
            <p class="text-muted small">ศิษย์เก่า</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span class="text-muted">1. ชื่อ-นามสกุล:</span>
                <span class="fw-bold text-end">${user.fname} ${user.lname}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span class="text-muted">2. รหัสนักศึกษา:</span>
                <span class="fw-bold">${user.id}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span class="text-muted">3. วิชาเอก:</span>
                <span class="fw-bold">${user.major || '-'}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span class="text-muted">4. คณะ:</span>
                <span class="fw-bold">${user.faculty}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span class="text-muted">5. วันที่จบการศึกษา:</span>
                <span class="fw-bold">${user.gradDate || '-'}</span>
            </li>
        </ul>
    `;
    
    const viewModal = new bootstrap.Modal(document.getElementById('viewProfileModal'));
    viewModal.show();
}

function searchAlumni() {
    const val = document.getElementById('searchInput').value.toLowerCase();
    const filtered = alumniList.filter(a => 
        a.fname.toLowerCase().includes(val) || a.lname.toLowerCase().includes(val)
    );
    renderAlumni(filtered);
}

function login() {
    const u = document.getElementById('loginUser').value;
    const p = document.getElementById('loginPass').value;

    if(u === 'admin' && p === 'admin') {
        currentRole = 'admin';
        setLoginState('Admin Panel');
    } else {
        const user = alumniList.find(a => a.id === u && a.phone === p);
        if(user) {
            currentRole = 'member';
            setLoginState(user.fname);
        } else {
            alert('Username หรือ Password ไม่ถูกต้อง');
        }
    }
}

function setLoginState(name) {
    document.getElementById('userDisplay').innerText = "สวัสดี, " + name;
    document.getElementById('userDisplay').classList.remove('d-none');
    document.getElementById('btnLogout').classList.remove('d-none');
    document.getElementById('btnLogin').classList.add('d-none');
    
    if(currentRole === 'admin') {
        document.getElementById('adminPanel').classList.remove('d-none');
        document.querySelectorAll('.admin-ui').forEach(el => el.classList.remove('d-none'));
    }
    bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
    renderAlumni(alumniList);
}

function logout() { location.reload(); }

// --- ส่วนของการจัดการข้อมูล (CRUD) ---

function prepareRegisterForm() {
    document.getElementById('regForm').reset();
    const footer = document.querySelector('#registerModal .text-center.mt-4');
    footer.innerHTML = `<button type="button" class="btn btn-purple px-5" onclick="register()">ลงทะเบียน</button>`;
}

function register() {
    const newUser = {
        id: document.getElementById('regId').value,
        fname: document.getElementById('regFName').value,
        lname: document.getElementById('regLName').value,
        phone: document.getElementById('regPhone').value,
        birthdate: document.getElementById('regBirth').value,
        email: document.getElementById('regEmail').value,
        major: document.getElementById('regMajor').value,
        faculty: document.getElementById('regFaculty').value,
        gradDate: document.getElementById('regGradDate').value,
        address: document.getElementById('regAddr').value
    };
    if(!newUser.id || !newUser.phone) return alert('กรุณากรอกรหัสนักศึกษาและเบอร์โทร');
    alumniList.push(newUser);
    alert('สมัครสมาชิกสำเร็จ!');
    bootstrap.Modal.getInstance(document.getElementById('registerModal')).hide();
    renderAlumni(alumniList);
}

function editUser(index) {
    const user = alumniList[index];
    
    document.getElementById('regId').value = user.id;
    document.getElementById('regFName').value = user.fname;
    document.getElementById('regLName').value = user.lname;
    document.getElementById('regPhone').value = user.phone;
    document.getElementById('regBirth').value = user.birthdate || '';
    document.getElementById('regEmail').value = user.email || '';
    document.getElementById('regMajor').value = user.major || '';
    document.getElementById('regFaculty').value = user.faculty;
    document.getElementById('regGradDate').value = user.gradDate;
    document.getElementById('regAddr').value = user.address || '';

    const footer = document.querySelector('#registerModal .text-center.mt-4');
    footer.innerHTML = `<button type="button" class="btn btn-warning px-5" onclick="updateUser(${index})">บันทึกการแก้ไข</button>`;
    
    const regModal = new bootstrap.Modal(document.getElementById('registerModal'));
    regModal.show();
}

function updateUser(index) {
    alumniList[index] = {
        id: document.getElementById('regId').value,
        fname: document.getElementById('regFName').value,
        lname: document.getElementById('regLName').value,
        phone: document.getElementById('regPhone').value,
        birthdate: document.getElementById('regBirth').value,
        email: document.getElementById('regEmail').value,
        major: document.getElementById('regMajor').value,
        faculty: document.getElementById('regFaculty').value,
        gradDate: document.getElementById('regGradDate').value,
        address: document.getElementById('regAddr').value
    };

    alert('อัปเดตข้อมูลเรียบร้อย!');
    bootstrap.Modal.getInstance(document.getElementById('registerModal')).hide();
    renderAlumni(alumniList);
}

function deleteUser(index) {
    if(confirm('ต้องการลบข้อมูลคนนี้ใช่หรือไม่?')) {
        alumniList.splice(index, 1);
        renderAlumni(alumniList);
    }
}

// --- ส่วนจัดการ Admin ---

function renderAdmins() {
    const table = document.getElementById('adminTableBody');
    table.innerHTML = '';
    adminList.forEach((adm, idx) => {
        table.innerHTML += `
            <tr>
                <td>${adm.username}</td>
                <td>${adm.name}</td>
                <td>${idx === 0 ? '-' : `<button class="btn btn-sm btn-danger" onclick="deleteAdmin(${idx})">ลบ Admin</button>`}</td>
            </tr>`;
    });
}

function addNewAdmin() {
    const user = prompt("กำหนด Username Admin ใหม่:");
    const name = prompt("ชื่อผู้ดูแล:");
    if(user && name) {
        adminList.push({username: user, name: name});
        renderAdmins();
    }
}

function deleteAdmin(index) {
    if(confirm('ลบสิทธิ์ Admin คนนี้?')) {
        adminList.splice(index, 1);
        renderAdmins();
    }
}