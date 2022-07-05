<?php

namespace App\Http\Controllers;

use App\Models\commande;
use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class Commandecontroller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($user_id )
    {

 $command = commande::all();
 return response()->json($command);
 
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create( request $request ,$user_id )
    {


        $user = User::where('id', $user_id)->first();

        $validator = Validator::make($request->all(), [
            'nom' => 'required|',
            'prenom' => 'required|',
            'adresse' => 'required|',
            'code_postal' => 'required|',
            'numero' => 'required|',

        ]);
        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors()
            ]);
        }else{
        $command = new commande();
        $command->nom = $request->nom;
        $command->prenom = $request->prenom;
        $command->articles = $request->articles;
        $command->adresse = $request->adresse;
        $command->code_postal = $request->code_postal;
        $command->numero = $request->numero;
        $command->user_id = $user->id;
       $command->save();
        return $command;
return response()->json([

]);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\c  $c
     * @return \Illuminate\Http\Response
     */
    public function show( )
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\c  $c
     * @return \Illuminate\Http\Response
     */
    public function edit( )
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\c  $c
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, )
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\c  $c
     * @return \Illuminate\Http\Response
     */
    public function destroy()
    {
        //
    }
}
