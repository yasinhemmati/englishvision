<?php
/* ═══ English Vision — نقطه‌ی آپلود پنل ادمین ═══
   ⚠️ قبل از استفاده، رمز زیر را حتماً عوض کن: */
const ADMIN_PASSWORD = 'yasin1376';

header('Content-Type: application/json; charset=utf-8');
$configured = ADMIN_PASSWORD !== 'CHANGE_ME_PLEASE';
$pw = $_POST['pw'] ?? $_GET['pw'] ?? '';
$auth = $configured && is_string($pw) && $pw !== '' && hash_equals(ADMIN_PASSWORD, $pw);

if (isset($_GET['ping'])) { echo json_encode(['ok'=>1,'configured'=>$configured,'auth'=>$auth]); exit; }
function deny($m,$c=403){ http_response_code($c); echo json_encode(['ok'=>0,'error'=>$m]); exit; }
if (!$configured) deny('رمز پنل هنوز داخل upload.php تنظیم نشده است.');
if (!$auth) deny('رمز نادرست است.');

if (isset($_GET['stats'])) {
  $f = __DIR__.'/hits.log'; $days = [];
  if (is_file($f)) foreach (file($f, FILE_IGNORE_NEW_LINES|FILE_SKIP_EMPTY_LINES) as $l) $days[$l] = ($days[$l] ?? 0) + 1;
  echo json_encode(['ok'=>1,'days'=>$days]); exit;
}

$path = $_POST['path'] ?? '';
if (strpos($path,'..') !== false ||
    !preg_match('~^(audio|images)/grade(7|8|9|10|11|12)/[A-Za-z0-9_\-/]+\.(mp3|m4a|jpg|jpeg|png|webp)$~', $path)
    && !preg_match('~^images/logo\.(png|jpg|jpeg|webp|svg)$~', $path))
  deny('مسیر مجاز نیست.');
if (empty($_FILES['file'])) deny('فایلی ارسال نشده.');
if ($_FILES['file']['size'] > 20*1024*1024) deny('حجم بیش از ۲۰ مگابایت است.');

$dest = dirname(__DIR__).'/'.$path;
if (!is_dir(dirname($dest))) @mkdir(dirname($dest), 0755, true);
if (!move_uploaded_file($_FILES['file']['tmp_name'], $dest)) deny('ذخیره ناموفق (دسترسی نوشتن پوشه را چک کن).', 500);
@unlink($dest.'.placeholder');
echo json_encode(['ok'=>1,'path'=>$path]);
