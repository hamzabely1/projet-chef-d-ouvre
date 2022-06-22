<?php

namespace App\Http\Controllers;

use App\Models\article;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(request $request)
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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store($id)
    {


    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\article  $article
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $articles = article::all();
        return response()->json($articles);

        return $articles;

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\article  $article
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {



    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\article  $article
     * @return \Illuminate\Http\Response
     */
    public function update( $id ,Request $request)
    {

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\article  $article
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {

    }
}
