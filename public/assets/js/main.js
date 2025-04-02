document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const senha = document.getElementById('password').value;

            const result = await loginUser(email, senha);

            if (result.error) {
                showAlert(result.error, "error");
            } else {
                showAlert(result.message, "success");
                setTimeout(() => {
                    window.location.href = "/admin";
                }, 2000);
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const first_name = document.getElementById('first_name').value;
            const last_name = document.getElementById('last_name').value;
            const email = document.getElementById('email').value;
            const passwd = document.getElementById('password').value;

            const result = await registerUser(first_name, last_name, email, passwd);

            if (result.error) {
                showAlert(result.error, "error");
            } else {
                showAlert(result.message, "success");
                setTimeout(() => {
                    window.location.href = "/admin";
                }, 2000);
            }
        });
    }
});


function showAlert(message, type = "success") {
    Swal.fire({
        title: type === "success" ? "Sucesso!" : "Erro!",
        text: message,
        icon: type,
        confirmButtonText: "OK",
        timer: 3000,
        showConfirmButton: false
    });
}


document.addEventListener("DOMContentLoaded", function () {
    const logoutBtn = document.getElementById("logoutBtn");

    if (logoutBtn) {
        logoutBtn.addEventListener("click", function (e) {
            e.preventDefault();

            Swal.fire({
                title: "Tem certeza?",
                text: "Você será desconectado do sistema.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#d33",
                cancelButtonColor: "#3085d6",
                confirmButtonText: "Sim, sair!",
                cancelButtonText: "Cancelar"
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch("/api/logout")
                        .then(response => response.json())
                        .then(data => {
                            Swal.fire("Até logo!", data.message, "success");
                            setTimeout(() => {
                                window.location.href = "/login";
                            }, 1500);
                        })
                        .catch(error => Swal.fire("Erro!", "Não foi possível encerrar a sessão", "error"));
                }
            });
        });
    }
});



/************************************************************************ */
/** CATEGORIA*/
/**************************************************************************/
async function deleteCategory(id) {
    const result = await Swal.fire({
        title: "Tem certeza?",
        text: "A categoria será excluída e não poderá ser utilizada no sistema!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Sim, excluir!",
        cancelButtonText: "Cancelar"
    });

    if (result.isConfirmed) {
        try {
            const response = await fetch(`/admin/categories/delete/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" }
            });

            const data = await response.json();

            if (data.success) {
                Swal.fire("Excluída!", data.message, "success");
                document.getElementById(`category-${id}`).remove(); // Remove da tabela
            } else {
                Swal.fire("Erro!", data.message, "error");
            }
        } catch (error) {
            Swal.fire("Erro!", "Falha ao comunicar com o servidor.", "error");
        }
    }
}