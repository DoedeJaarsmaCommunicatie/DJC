<?php
namespace App;

use App\Providers\EnqueueServiceProvider;
use App\Providers\MenuServiceProvider;

return [
	'providers'     => [
	    MenuServiceProvider::class,
        EnqueueServiceProvider::class
    ]
];
