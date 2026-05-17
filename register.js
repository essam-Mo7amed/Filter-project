document.addEventListener("DOMContentLoaded", () => {
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
    msgEl.textContent = message || "";
    if (message) {
      input.classList.add("input-invalid");
    } else {
      input.classList.remove("input-invalid");
    }
  };

  let normalizeDigits = (value) => value.replace(/[^\d]/g, "");
  let resolveCountryCode = () => countryCode.value;

  let updateCodeBadge = () => {
    if (!countryCodeBadge) return;
    countryCodeBadge.textContent = countryCode.value || "+--";
  };

  let validateName = () => {
    let value = fullName.value.trim();
    if (!value) {
      setError(fullName, errorMap.fullName, "من فضلك أدخل الاسم بالكامل.");
      return false;
    }

    let nameRegex = /^[\p{L}][\p{L}\s'.-]{2,}$/u;
    if (!nameRegex.test(value) || value.split(/\s+/).length < 2) {
      setError(fullName, errorMap.fullName, "الاسم لازم يكون على الأقل اسمين وبحروف صحيحة.");
      return false;
    }

    setError(fullName, errorMap.fullName, "");
    return true;
  };

  let validatePhone = () => {
    let code = resolveCountryCode();
    let localRaw = normalizeDigits(phone.value);
    let localNumber = localRaw.replace(/^0+/, "");

    if (!countryCode.value) {
      setError(countryCode, errorMap.phone, "اختَر مفتاح الدولة أولًا.");
      return false;
    }

    if (!localNumber || localNumber.length < 6 || localNumber.length > 12) {
      setError(phone, errorMap.phone, "رقم الهاتف المحلي غير صحيح.");
      return false;
    }

    let full = `${code}${localNumber}`;
    let e164Digits = normalizeDigits(full);
    if (e164Digits.length < 8 || e164Digits.length > 15) {
      setError(phone, errorMap.phone, "رقم الهاتف الدولي غير صحيح.");
      return false;
    }

    fullPhone.value = full;
    setError(countryCode, errorMap.phone, "");
    setError(phone, errorMap.phone, "");
    return true;
  };

  let validateEmail = () => {
    let value = email.value.trim();
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

  let validatePassword = () => {
    let value = password.value;
    if (!value) {
      setError(password, errorMap.password, "من فضلك أدخل كلمة المرور.");
      return false;
    }

    let strong = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    if (!strong.test(value)) {
      setError(password, errorMap.password, "كلمة المرور 8 أحرف على الأقل وتحتوي حروف وأرقام.");
      return false;
    }

    setError(password, errorMap.password, "");
    return true;
  };

  let validateConfirmPassword = () => {
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

  let validateTerms = () => {
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
    let valid =
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
