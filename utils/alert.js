import Swal from 'sweetalert2';

export function swalError(params = 'Something went wrong!', title = 'Error !!!') {
  return Swal.fire({
    icon: 'error',
    title: title,
    text: params
  });
}

export function swalSuccessJa(params = 'สำเร็จ', title = 'SUCCESS !!!') {
  return Swal.fire({
    icon: 'success',
    title: title,
    text: params
  })
}
export function swalSuccess(params = 'SUCCESS!', title = 'SUCCESS !!!') {
  return Swal.fire({
    icon: 'success',
    title: title,
    text: params,
    showConfirmButton: false,
    timer: 1500
  })
}

export function swalWarring(params = 'WARRING!', title = 'WARRING !!!') {
  return Swal.fire({
    icon: 'warring',
    title: title,
    text: params
  });
}

export function swalLoading(params = 'Please wait...', title = 'Waiting...') {
  return Swal.fire({
    title: title,
    html: params,
    allowEscapeKey: false,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading()
    }
  });
}

export function swalClose() {
  return Swal.close()
}

