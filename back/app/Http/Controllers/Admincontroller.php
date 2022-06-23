<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Support\Str;

use Illuminate\Http\Request;

class Admincontroller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(article::latest()->get());

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $artciles = new article();
        $file_name = Str::random(50).'.'.$request->image->GetClientOriginalExtension();
        $request->image->move('articles/',$file_name);
        $artciles->nom = $request->input('nom');
        $artciles->image = 'articles/'.$file_name;
        $artciles->prix = $request->input('prix');
        $artciles->type = $request->input('type');
        $artciles->description = $request->input('description');
        $artciles->origines = $request->input('origines');


        $artciles->save();
        return $artciles;

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return response()->json(article::whereId($id)->first());

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $article = Article::whereId($id)->first();

        $article->update([

            'nom'=>$request->nom,
            'type'=>$request->type,
            'description' =>$request->description,
            'image' =>$request->image,
            'prix' =>$request->prix,
            'origines'=>$request->origines,
            'stock'=>$request->stock,


        ]);
        return response()->json('success');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        article::whereId($id)->first()->delete();

        return response()->json('success');
    }
}
