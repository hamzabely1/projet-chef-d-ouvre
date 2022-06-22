<?php

use App\Http\Controllers\Admincontroller;
use App\Http\Controllers\article;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\PanierController;
use App\Http\Controllers\Usercontroller;
use App\Models\panier;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('articles',[ArticleController::class,'show']);
Route::post('register',[Usercontroller::class,'create']);
Route::post('login',[Usercontroller::class,'login']);


Route::middleware(['auth:sanctum'])->group( function () {
    Route::post('logout',[Usercontroller::class,'logout']);

});

Route::post('add/panier',[PanierController::class,'create']);
Route::post('add_articles',[ArticleController::class,'create']);
Route::get('show/panier',[PanierController::class,'show']);

Route::resource('admin',Admincontroller::class);
