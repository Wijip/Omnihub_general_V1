const fs = require('fs');
const file = '/app/applet/src/pages/Upload.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetStr = `// --- REALTIME ACCUMULATIVE CHUNK UPLOADER (TAHAP 54.8) ---`;
const startIndex = content.indexOf(targetStr);

const endStr = `  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-10 md:py-16 pb-32">`;
const endIndex = content.indexOf(endStr);

if (startIndex !== -1 && endIndex !== -1) {
  const replacement = `  const handlePublish = async () => {
    if (files.length === 0 || isPublishing) return;
    setIsPublishing(true);
    
    const token = localStorage.getItem('token');
    if (!token) {
      setError('You must be logged in to upload.');
      setIsPublishing(false);
      return;
    }

    try {
      for (const fileObj of files) {
        addTask({
          id: fileObj.id,
          file: fileObj.file,
          title: fileObj.title || fileObj.file.name,
          description: fileObj.description || '',
          visibility: fileObj.visibility || 'public',
          categoryId: fileObj.categoryId || '1',
          allowDownload: fileObj.allowDownload !== undefined ? fileObj.allowDownload : true,
        });
      }

      localStorage.removeItem('omnihub_upload_draft');
      setFiles([]);
      navigate('/studio');
    } catch (e) {
      setError('An error occurred while starting upload.');
      setIsPublishing(false);
    }
  };

`;
  
  content = content.substring(0, startIndex) + replacement + content.substring(endIndex);
  fs.writeFileSync(file, content);
  console.log('File patched successfully.');
} else {
  console.log('Target string not found.');
  console.log('startIndex:', startIndex, 'endIndex:', endIndex);
}
