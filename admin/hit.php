<?php
/* شمارنده‌ی سبک بازدید — هر فراخوانی یک خط تاریخ ثبت می‌کند */
@file_put_contents(__DIR__.'/hits.log', date('Y-m-d')."\n", FILE_APPEND | LOCK_EX);
http_response_code(204);
