const buat_login = () => {
  const btn_lanjut = document.getElementById("X");
  btn_lanjut.parentElement.removeChild(btn_lanjut);

  const p = document.createElement("p");
  p.className = "tulisan_login";
  p.innerHTML = "Silahkan Mendaftar";
  const div = document.getElementsByTagName("div")[0];
  div.appendChild(p);

  const form = document.createElement("form");
  div.appendChild(form);

  const label_namauser = document.createElement("label");
  label_namauser.innerHTML = "Nama User";
  form.appendChild(label_namauser);

  const input_namauser = document.createElement("input");
  input_namauser.type = "text";
  input_namauser.name = "namauser";
  input_namauser.className = "form_login";
  input_namauser.placeholder = "Nama User..";
  form.appendChild(input_namauser);

  const label_nomorHP = document.createElement("label");
  label_nomorHP.innerHTML = "Nomor Handphone";
  form.appendChild(label_nomorHP);

  const input_nomorHP = document.createElement("input");
  input_nomorHP.type = "tel";
  input_nomorHP.name = "nomorHP";
  input_nomorHP.className = "form_login";
  input_nomorHP.placeholder = "Nomor Handphone..";
  form.appendChild(input_nomorHP);

  const label_username = document.createElement("label");
  label_username.innerHTML = "Username";
  form.appendChild(label_username);

  const input_username = document.createElement("input");
  input_username.type = "text";
  input_username.name = "username";
  input_username.className = "form_login";
  input_username.placeholder = "Username atau email..";
  form.appendChild(input_username);

  const label_password = document.createElement("label");
  label_password.innerHTML = "Password";
  form.appendChild(label_password);

  const input_password = document.createElement("input");
  input_password.type = "password";
  input_password.name = "password";
  input_password.className = "form_login";
  input_password.placeholder = "Password..";
  form.appendChild(input_password);

  const btn_input = document.createElement("input");
  btn_input.type = "submit";
  btn_input.className = "tombol_login";
  btn_input.value = "DAFTAR SEKARANG";
  form.appendChild(btn_input);
};
