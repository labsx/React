<?php

use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Route;

Route::get('/users', function () {
    return JsonResource::collection(User::paginate());
});
