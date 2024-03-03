
export const validFname = new RegExp('^[a-zA-Z]{3,}');
export const validLname = new RegExp('^[a-zA-Z]{1,}');
export const validPhoneNumber = new RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
// export const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
export const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
export const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[@#$%^&+=!]).{6,12}$');
