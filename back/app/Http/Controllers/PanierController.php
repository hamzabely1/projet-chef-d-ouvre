<?php

namespace App\Http\Controllers;

use App\Models\panier;
use Illuminate\Http\Request;

use function PHPUnit\Framework\returnSelf;

class PanierController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)


    {


        $add_article = panier::where('name',$request->name)->first();
        if ( $add_article == true) {

            return response()->json([
                'message'=>"error "
            ]);

        } else {

$add = new panier();
            $add->name =$request->name;
            $add->image =$request->image;
            $add->prix = $request->prix = $request->quantite * $request->prix;
            $add->quantite =$request->quantite;
            $add->save();
            return response()->json($add_article);
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
     * @param  \App\Models\panier  $panier
     * @return \Illuminate\Http\Response
     */
    public function show()
    {

        $panier = panier::all();
        return response()->json($panier);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\panier  $panier
     * @return \Illuminate\Http\Response
     */
    public function total()
    {
        $total = panier::all('prix');
        return response()->json($total);
        return $total;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\panier  $panier
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, panier $panier)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\panier  $panier
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        panier::whereId($id)->first()->delete();
        return response()->json('success');
    }
}
