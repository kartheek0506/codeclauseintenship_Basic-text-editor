function execCmd(command, value = null) {
    document.getElementById('editor').focus();
    document.execCommand(command, false, value);
}

document.getElementById('editor').addEventListener('input', function () {
    const content = this.innerHTML;
    localStorage.setItem('editorContent', content);
});

// Restore the editor content from local storage
const savedContent = localStorage.getItem('editorContent');
if (savedContent) {
    document.getElementById('editor').innerHTML = savedContent;
}
 


