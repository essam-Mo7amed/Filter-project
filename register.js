document.addEventListener("DOMContentLoaded", () => {
<<<<<<< HEAD
  let form = document.querySelector("#registerForm");
  if (!form) return;

  let fullName = document.querySelector("#fullName");
  let countryCode = document.querySelector("#countryCode");
  let countryCodeBadge = document.querySelector("#countryCodeBadge");
  let phone = document.querySelector("#phone");
  let fullPhone = document.querySelector("#fullPhone");
  let email = document.querySelector("#regEmail");
  let password = document.querySelector("#regPassword");
  let confirmPassword = document.querySelector("#confirmPassword");
  let terms = document.querySelector("#terms");

  let errorMap = {
    fullName: document.querySelector("#fullNameError"),
    phone: document.querySelector("#phoneError"),
    email: document.querySelector("#regEmailError"),
    password: document.querySelector("#regPasswordError"),
    confirmPassword: document.querySelector("#confirmPasswordError"),
    terms: document.querySelector("#termsError")
  };

  let setError = (input, msgEl, message) => {
=======
  const form = document.getElementById("registerForm");
  if (!form) return;

  const fullName = document.getElementById("fullName");
  const countryCode = document.getElementById("countryCode");
  const countryCodeBadge = document.getElementById("countryCodeBadge");
  const phone = document.getElementById("phone");
  const fullPhone = document.getElementById("fullPhone");
  const email = document.getElementById("regEmail");
  const password = document.getElementById("regPassword");
  const confirmPassword = document.getElementById("confirmPassword");
  const terms = document.getElementById("terms");

  const errorMap = {
    fullName: document.getElementById("fullNameError"),
    phone: document.getElementById("phoneError"),
    email: document.getElementById("regEmailError"),
    password: document.getElementById("regPasswordError"),
    confirmPassword: document.getElementById("confirmPasswordError"),
    terms: document.getElementById("termsError")
  };

  const setError = (input, msgEl, message) => {
>>>>>>> c1036fd2de666936226bfba8d422bd151a498fcd
    msgEl.textContent = message || "";
    if (message) {
      input.classList.add("input-invalid");
    } else {
      input.classList.remove("input-invalid");
    }
  };

<<<<<<< HEAD
  let normalizeDigits = (value) => value.replace(/[^\d]/g, "");
  let resolveCountryCode = () => countryCode.value;

  let updateCodeBadge = () => {
=======
  const normalizeDigits = (value) => value.replace(/[^\d]/g, "");
  const resolveCountryCode = () => countryCode.value;

  const updateCodeBadge = () => {
>>>>>>> c1036fd2de666936226bfba8d422bd151a498fcd
    if (!countryCodeBadge) return;
    countryCodeBadge.textContent = countryCode.value || "+--";
  };

<<<<<<< HEAD
  let validateName = () => {
    let value = fullName.value.trim();
=======
  const validateName = () => {
    const value = fullName.value.trim();
>>>>>>> c1036fd2de666936226bfba8d422bd151a498fcd
    if (!value) {
      setError(fullName, errorMap.fullName, "من فضلك أدخل الاسم بالكامل.");
      return false;
    }

<<<<<<< HEAD
    let nameRegex = /^[\p{L}][\p{L}\s'.-]{2,}$/u;
=======
    const nameRegex = /^[\p{L}][\p{L}\s'.-]{2,}$/u;
>>>>>>> c1036fd2de666936226bfba8d422bd151a498fcd
    if (!nameRegex.test(value) || value.split(/\s+/).length < 2) {
      setError(fullName, errorMap.fullName, "الاسم لازم يكون على الأقل اسمين وبحروف صحيحة.");
      return false;
    }

    setError(fullName, errorMap.fullName, "");
    return true;
  };

<<<<<<< HEAD
  let validatePhone = () => {
    let code = resolveCountryCode();
    let localRaw = normalizeDigits(phone.value);
    let localNumber = localRaw.replace(/^0+/, "");
=======
  const validatePhone = () => {
    const code = resolveCountryCode();
    const localRaw = normalizeDigits(phone.value);
    const localNumber = localRaw.replace(/^0+/, "");
>>>>>>> c1036fd2de666936226bfba8d422bd151a498fcd

    if (!countryCode.value) {
      setError(countryCode, errorMap.phone, "اختَر مفتاح الدولة أولًا.");
      return false;
    }

    if (!localNumber || localNumber.length < 6 || localNumber.length > 12) {
      setError(phone, errorMap.phone, "رقم الهاتف المحلي غير صحيح.");
      return false;
    }

<<<<<<< HEAD
    let full = `${code}${localNumber}`;
    let e164Digits = normalizeDigits(full);
=======
    const full = `${code}${localNumber}`;
    const e164Digits = normalizeDigits(full);
>>>>>>> c1036fd2de666936226bfba8d422bd151a498fcd
    if (e164Digits.length < 8 || e164Digits.length > 15) {
      setError(phone, errorMap.phone, "رقم الهاتف الدولي غير صحيح.");
      return false;
    }

    fullPhone.value = full;
    setError(countryCode, errorMap.phone, "");
    setError(phone, errorMap.phone, "");
    return true;
  };

<<<<<<< HEAD
  let validateEmail = () => {
    let value = email.value.trim();
=======
  const validateEmail = () => {
    const value = email.value.trim();
>>>>>>> c1036fd2de666936226bfba8d422bd151a498fcd
    if (!value) {
      setError(email, errorMap.email, "من فضلك أدخل البريد الإلكتروني.");
      return false;
    }

    if (!email.checkValidity()) {
      setError(email, errorMap.email, "صيغة البريد الإلكتروني غير صحيحة.");
      return false;
    }

    setError(email, errorMap.email, "");
    return true;
  };

<<<<<<< HEAD
  let validatePassword = () => {
    let value = password.value;
=======
  const validatePassword = () => {
    const value = password.value;
>>>>>>> c1036fd2de666936226bfba8d422bd151a498fcd
    if (!value) {
      setError(password, errorMap.password, "من فضلك أدخل كلمة المرور.");
      return false;
    }

<<<<<<< HEAD
    let strong = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
=======
    const strong = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
>>>>>>> c1036fd2de666936226bfba8d422bd151a498fcd
    if (!strong.test(value)) {
      setError(password, errorMap.password, "كلمة المرور 8 أحرف على الأقل وتحتوي حروف وأرقام.");
      return false;
    }

    setError(password, errorMap.password, "");
    return true;
  };

<<<<<<< HEAD
  let validateConfirmPassword = () => {
=======
  const validateConfirmPassword = () => {
>>>>>>> c1036fd2de666936226bfba8d422bd151a498fcd
    if (!confirmPassword.value) {
      setError(confirmPassword, errorMap.confirmPassword, "من فضلك أكّد كلمة المرور.");
      return false;
    }

    if (confirmPassword.value !== password.value) {
      setError(confirmPassword, errorMap.confirmPassword, "تأكيد كلمة المرور غير مطابق.");
      return false;
    }

    setError(confirmPassword, errorMap.confirmPassword, "");
    return true;
  };

<<<<<<< HEAD
  let validateTerms = () => {
=======
  const validateTerms = () => {
>>>>>>> c1036fd2de666936226bfba8d422bd151a498fcd
    if (!terms.checked) {
      setError(terms, errorMap.terms, "لازم توافق على الشروط والأحكام.");
      return false;
    }

    setError(terms, errorMap.terms, "");
    return true;
  };

  countryCode.addEventListener("change", () => {
    updateCodeBadge();
    validatePhone();
  });

  fullName.addEventListener("blur", validateName);
  fullName.addEventListener("input", validateName);
  phone.addEventListener("blur", validatePhone);
  phone.addEventListener("input", validatePhone);
  email.addEventListener("blur", validateEmail);
  email.addEventListener("input", validateEmail);
  password.addEventListener("blur", validatePassword);
  password.addEventListener("input", () => {
    validatePassword();
    if (confirmPassword.value) {
      validateConfirmPassword();
    }
  });
  confirmPassword.addEventListener("blur", validateConfirmPassword);
  confirmPassword.addEventListener("input", validateConfirmPassword);
  terms.addEventListener("change", validateTerms);

  form.addEventListener("submit", (e) => {
<<<<<<< HEAD
    let valid =
=======
    const valid =
>>>>>>> c1036fd2de666936226bfba8d422bd151a498fcd
      validateName() &&
      validatePhone() &&
      validateEmail() &&
      validatePassword() &&
      validateConfirmPassword() &&
      validateTerms();

    if (!valid) {
      e.preventDefault();
    }
  });

  updateCodeBadge();
});
