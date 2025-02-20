<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;

Route::get('/users', function (Request $request) {
    $search = $request->input('q');

    return JsonResource::collection(User::where('name', 'like', "%${search}%")->paginate());
});

Route::post('/users', function (Request $request) {
    $request->offsetSet('password', Hash::make($request->input('password')));

    $user = User::create($request->only(['name', 'email', 'password']));

    return new JsonResource($user);
});

Route::delete('/users/{id}', function ($id) {
    $user = User::findOrFail($id);

    $user->delete();

    return response()->noContent();
});

Route::put('/users/{id}', function (Request $request, $id) {
    $user = User::findOrFail($id);

    $request->offsetSet('password', Hash::make($request->input('password')));

    $user->fill($request->only(['name', 'email', 'password']));
    $user->save();

    return new JsonResource($user);
});
