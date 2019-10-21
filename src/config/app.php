<?php
namespace App;

use App\Providers\CustomizerServiceProvider;
use App\Providers\EnqueueServiceProvider;
use App\Providers\MenuServiceProvider;

return [
	'providers'     => [
	    MenuServiceProvider::class,
        EnqueueServiceProvider::class,
        CustomizerServiceProvider::class,
    ]
];
