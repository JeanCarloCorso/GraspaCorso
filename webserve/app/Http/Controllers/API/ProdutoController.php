<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\ProdutoCollection;
use App\Produto;

class ProdutoController extends Controller
{
    // _construct (){
    //     header("Access-Control-Allow-Origin: *");
    // }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        header("Access-Control-Allow-Origin: *");
        return new ProdutoCollection(Produto::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $p = new User;
        $p->name = $request->input('nome');
        $p->preco = $request->input('preco');
        $p->qtd_estoque = $request->input('qtd_estoque');
        $p->descricao = $request->input('descricao');
        $p->foto = $request->input('foto');
        $p->save();
        return ($p);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        header("Access-Control-Allow-Origin: *");
        return Produto::find($id);
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
