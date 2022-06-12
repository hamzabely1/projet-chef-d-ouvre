<?php

namespace App\Http\Controllers;

use App\Models\article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
         $article = article::all();
        return
        response()->json($article);

       }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(request $request)
    {


        $artciles = new article();
        $artciles->nom = $request->input('nom');
        $artciles->image = $request->file('image')->store('articles');
        $artciles->prix = $request->input('prix');
        $artciles->type = $request->input('type');
        $artciles->note = $request->input('note');
        $artciles->description = $request->input('description');
        $artciles->origines = $request->input('origines');


        $artciles->save();
        return $artciles;


    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store($id)
    {
        return article::find($id);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\article  $article
     * @return \Illuminate\Http\Response
     */
    public function show(article $article)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\article  $article
     * @return \Illuminate\Http\Response
     */
    public function edit(article $article)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\article  $article
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, article $article)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\article  $article
     * @return \Illuminate\Http\Response
     */
    public function destroy(article $article)
    {
        //
    }
}
