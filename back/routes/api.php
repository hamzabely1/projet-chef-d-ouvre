<?php

use App\Http\Controllers\Admincontroller;
use App\Http\Controllers\article;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\Commandecontroller;
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

/*Route pour recupere l'artcile tous*/
Route::get('articles',[ArticleController::class,'show']);

/*Route pour le login et S'inscrire*/
Route::post('register',[Usercontroller::class,'inscription']);
Route::post('login',[Usercontroller::class,'login']);



Route::delete('delete_all',[Usercontroller::class,'destroy']);


    Route::post('logout',[Usercontroller::class,'logout']);


/*Route pour le panier*/
Route::post('add/panier',[PanierController::class,'create']);
Route::get('show/panier',[PanierController::class,'show']);
Route::get('total',[PanierController::class,'total']);
Route::delete('delete/{id}',[PanierController::class,'destroy']);


/*Route pour l'admin */
Route::resource('admin',Admincontroller::class);
Route::post('add_articles',[Admincontroller::class,'store']);

Route::post('checkadmin',[Usercontroller::class,'checkAdmin']);
Route::post('connexion',[Usercontroller::class,'connexion']);

Route::post('add/commande/{user_id}',[Commandecontroller::class,'create']);

Route::get('commande',[Commandecontroller::class,'index']);






